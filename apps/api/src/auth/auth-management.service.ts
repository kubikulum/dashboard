// auth.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Issuer, Client, TokenSet } from 'openid-client';
import { catchError, firstValueFrom } from 'rxjs';


import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthManagementService {
	private client!: Client;
	private baseUrl: string;
	private tokenSet!: TokenSet;

	constructor(private readonly httpService: HttpService, protected readonly configService: ConfigService,) {
		this.baseUrl = this.configService.get('LOGTO_MANAGEMENT_AUDIENCE') || '';
		this.initializeClient();
	}

	private async initializeClient() {
		const issuer = await Issuer.discover(this.configService.get('LOGTO_MANAGEMENT_ISSUER_URL') || '');
		this.client = new issuer.Client({
			client_id: this.configService.get('LOGTO_MANAGEMENT_CLIENT_ID') || '',
			client_secret: this.configService.get('LOGTO_MANAGEMENT_CLIENT_SECRET')
		});
		this.tokenSet = await this.getOAuthToken();
	}

	private async getOAuthToken(): Promise<TokenSet> {
		const tokenSet = await this.client.grant({
			grant_type: 'client_credentials',
			resource: this.baseUrl,
			scope: 'all',
		});
		return tokenSet;
	}

	private async ensureAccessToken() {
		if (this.tokenSet.expired()) {
			this.tokenSet = await this.getOAuthToken();
		}
		return this.tokenSet.access_token;
	}

	public async addRoleToUserInOrganization(userId: string, organizationId: string, roleName: string): Promise<any> {
		const accessToken = await this.ensureAccessToken();
		const roleId = "i57wuo72wlk7kdhih4mnu"//admin
		const { data } = await firstValueFrom(
			this.httpService.post(`${this.baseUrl}/organizations/${organizationId}/users/roles`, {

				userIds: [userId],
				organizationRoleIds: [roleId]

			}, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				}
			}).pipe(
				catchError((error) => {
					console.log(error.response.data);
					throw error
				}),
			))
		return data;
	}

	public async createOrganization(name: string): Promise<any> {
		const accessToken = await this.ensureAccessToken();
		const { data } = await firstValueFrom(
			this.httpService.post(`${this.baseUrl}/organizations`, {

				name

			}, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				}
			}).pipe(
				catchError((error) => {
					console.log(error.response.data);
					throw error
				}),
			))
		return data;
	}

	public async deleteOrganization(id: string): Promise<any> {
		const accessToken = await this.ensureAccessToken();
		const { data } = await firstValueFrom(
			this.httpService.delete(`${this.baseUrl}/organizations/${id}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				}
			}).pipe(
				catchError((error) => {
					console.log(error.response.data);
					throw error
				}),
			))
		return data;
	}


	public async addUserToOrganization(userId: string, organizationId: string): Promise<any> {
		const accessToken = await this.ensureAccessToken();
		const { data } = await firstValueFrom(
			this.httpService.post(`${this.baseUrl}/organizations/${organizationId}/users`, {
				userIds: [userId]
			}, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				}
			}).pipe(
				catchError((error) => {
					console.log(error.response.data);
					throw error
				}),
			))
		return data;

	}

	public async getUser(id: string): Promise<any> {
		const accessToken = await this.ensureAccessToken();

		const { data } = await firstValueFrom(
			this.httpService.get(`${this.baseUrl}/users/${id}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}).pipe(
				catchError((error) => {
					console.log(error.response.data);
					throw 'An error happened!';
				}),
			))

		return data
	}

	public async getOrganizationsForUser(userId: string): Promise<any> {
		const accessToken = await this.ensureAccessToken();

		const { data } = await firstValueFrom(
			this.httpService.get(`${this.baseUrl}/users/${userId}/organizations`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}).pipe(
				catchError((error) => {
					console.log(error.response.data);
					throw 'An error happened!';
				}),
			))

		return data
	}
}
