import { Routes } from '@angular/router';
import { CrudComponent } from '../comp/crud/crud.component';
import { RootComponent } from '../root/root.component';
import { NgrxCrudComponent } from '../ngrx-crud/ngrx-crud/ngrx-crud.component';
import { LoginComponent } from '../login/login.component';
import { CustObsComponent } from '../custObs/cust-obs.component';
import { DisplayComponent } from '../counter/display/display.component';

export const routes: Routes = [
    { path: 'home', component: RootComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'ngrx-crud', component: NgrxCrudComponent },
    { path: 'login', component: LoginComponent },
    { path: 'obs', component: CustObsComponent },
    { path: 'counter', component: DisplayComponent },
    { path: 'display', component: DisplayComponent }

];

