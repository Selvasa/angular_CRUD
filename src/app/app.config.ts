import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MeanInterceptor } from './intercept.service.ts/mean.inercept.service';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { provideStoreDevtools } from '@ngrx/store-devtools'
import { NgxSpinnerModule } from 'ngx-spinner';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(NgxSpinnerModule.forRoot()),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useValue: () => { console.log('initializer') }
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MeanInterceptor
    },

    provideAnimationsAsync()
    // provideEffects(),
    // provideStoreDevtools()
  ]
};
