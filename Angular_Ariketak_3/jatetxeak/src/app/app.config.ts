import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
	importProvidersFrom([
  	TranslateModule.forRoot({
    	loader: {
      	provide: TranslateLoader,
      	useFactory: createTranslateLoader,
      	deps: [HttpClient]
    	},
    	defaultLanguage:'eu',
  	})
	]),

	provideHttpClient(withInterceptorsFromDi())]
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}
