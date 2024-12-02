import { Routes } from '@angular/router';
import { CrudComponent } from '../comp/crud/crud.component';
import { RootComponent } from '../root/root.component';

export const routes: Routes = [
    { path: 'home', component: RootComponent },
    { path: 'crud', component: CrudComponent }
];
