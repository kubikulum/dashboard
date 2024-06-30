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

	constructor(private readonly httpService: HttpService, protected readonly configService: ConfigService,) {
		this.baseUrl = this.configService.get('LOGTO_MANAGEMENT_AUDIENCE') || '';
		this.initializeClient();
	}

	private async initializeClient() {
		const issuer = await Issuer.discover( this.configService.get('LOGTO_MANAGEMENT_ISSUER_URL') || '');
		this.client = new issuer.Client({
			client_id: this.configService.get('LOGTO_MANAGEMENT_CLIENT_ID') || '',
			client_secret: this.configService.get('LOGTO_MANAGEMENT_CLIENT_SECRET')
		});
	}

	public async getOAuthToken(): Promise<TokenSet> {
		const tokenSet = await this.client.grant({
			grant_type: 'client_credentials',
			resource: this.baseUrl,
			scope: 'all',
		});
		return tokenSet;
	}

	public async getUser(id:string): Promise<any> {
		const tokenSet = await this.getOAuthToken();
		const accessToken = tokenSet.access_token;

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

	public async getOrganizationsForUser(userId:string): Promise<any> {
		const tokenSet = await this.getOAuthToken();
		const accessToken = tokenSet.access_token;

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
