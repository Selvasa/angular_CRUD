import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { provideStoreDevtools } from '@ngrx/store-devtools'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useValue: () => {
        console.log('initializer')
      }
    }
    // provideEffects(),
    // provideStoreDevtools()
  ]
};
