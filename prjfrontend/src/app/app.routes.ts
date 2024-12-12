import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'admin',
        component: AdminComponent,
        children :[
            {
                path : '',
                component : DashboardComponent
            }
        ]
    }
];
