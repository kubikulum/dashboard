import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { OAuthModuleOptions, OAuthService } from './oauth.service';


@Global()
@Module({})
export class OAuthModule {
  static forRoot(options: OAuthModuleOptions): DynamicModule {
    return {
      module: OAuthModule,
      providers: [
        {
          provide: 'OAUTH_MODULE_OPTIONS',
          useValue: options,
        },
        OAuthService,
      ],
      exports: [OAuthService],
    };
  }

  static forRootAsync(options: {
    useFactory: (...args: any[]) => Promise<OAuthModuleOptions> | OAuthModuleOptions,
    inject?: any[], imports?: any[],
  }): DynamicModule {
    const asyncProviders: Provider[] = [
      {
        provide: 'OAUTH_MODULE_OPTIONS',
        useFactory: options.useFactory,
        inject: options.inject || [],
      },
      OAuthService,
    ];

    return {
      module: OAuthModule,
      imports: options.imports || [],
      providers: asyncProviders,
      exports: [OAuthService],
    };
  }

}

