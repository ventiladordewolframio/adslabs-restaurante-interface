import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './notfound/notfound';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: '**',
        component: NotFound,
    }

];
