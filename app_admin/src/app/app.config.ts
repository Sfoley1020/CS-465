import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';   //  add this
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt-interceptor';  //  interceptor import

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),  // enables DI interceptors
    importProvidersFrom(HttpClientModule, ReactiveFormsModule),  //  include HttpClientModule here
    authInterceptProvider                         //  register interceptor globally
  ]
};