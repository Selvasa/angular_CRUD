import { Routes } from '@angular/router';
import { SignalsComponent } from './components/comps/signals/signals.component';
import { LandComponent } from './components/crud/land/land.component';
import { RxjsComponent } from './components/comps/rxjs/rxjs.component';
import { LandingComponent } from './components/mean/landing/landing.component';
import { passCanGuard } from './components/guard/guard.guard';
import { passCanDeGuard } from './components/guard/pass-can-de.guard';

export const routes: Routes = [
    { path: 'signals', loadComponent: () => import('./components/comps/signals/signals.component').then(m => m.SignalsComponent) },
    { path: 'rxjs', component: RxjsComponent, },
    { path: 'crud', component: LandComponent, },
    { path: 'mean',  loadComponent: () => import('./components/mean/landing/landing.component').then(s => s.LandingComponent) },


];

