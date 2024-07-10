import { Injectable, Inject } from '@nestjs/common';
import { Issuer, Client, TokenSet } from 'openid-client';

export interface OAuthModuleOptions {
	issuerUrl: string;
	clientId: string;
	clientSecret: string;
	audience: string;
}

@Injectable()
export class OAuthService {
	private client!: Client;
	private tokenSet!: TokenSet

	constructor(@Inject('OAUTH_MODULE_OPTIONS') private options: OAuthModuleOptions) {
		this.initializeClient();
	}

	private async initializeClient() {
		const issuer = await Issuer.discover(this.options.issuerUrl);
		this.client = new issuer.Client({
			client_id: this.options.clientId,
			client_secret: this.options.clientSecret,

		});
	}

	async getAccessToken(): Promise<string | undefined> {
		// Check if the token is still valid
		if (this.tokenSet && !this.tokenSet.expired()) {
			return this.tokenSet.access_token;
		}

		this.tokenSet = await this.client.grant({
			grant_type: 'client_credentials',
			resource: this.options.audience as string,
			scope: 'all',
		});


		return this.tokenSet.access_token;
	}
}
