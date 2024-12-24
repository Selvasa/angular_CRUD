import { Routes } from '@angular/router';
import { CrudComponent } from '../comp/crud/crud.component';
import { RootComponent } from '../root/root.component';
import { NgrxCrudComponent } from '../ngrx-crud/ngrx-crud/ngrx-crud.component';

export const routes: Routes = [
    { path: 'home', component: RootComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'ngrx-crud', component: NgrxCrudComponent }

];

