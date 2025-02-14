import { Routes } from '@angular/router';
import { SignalsComponent } from './components/comps/signals/signals.component';
import { LandComponent } from './components/crud/land/land.component';
import { RxjsComponent } from './components/comps/rxjs/rxjs.component';
import { LandingComponent } from './components/mean/landing/landing.component';

export const routes: Routes = [
    { path: 'signals', component: SignalsComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: 'crud', component: LandComponent },
    { path: 'mean', component: LandingComponent }

];

