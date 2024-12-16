import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';
import { ListadoComponent } from './errezetak/pages/listado/listado.component';
import { AgregarComponent } from './errezetak/pages/agregar/agregar.component';
import { BuscarComponent } from './errezetak/pages/buscar/buscar.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './errezetak/pages/home/home.component';
import { ErrezetaComponent } from './errezetak/pages/errezeta/errezeta.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'auth', children: [
            { path: 'login', component: LoginComponent },
            { path: 'registro', component: RegistroComponent },
            { path: '**', redirectTo: 'login' }
        ]
    },
    {
        path: 'errezetak', 
        component: HomeComponent, canActivate: [authGuard],
        children: [
            {path: 'listado', component: ListadoComponent},
            {path: 'agregar', component: AgregarComponent},
            {path: 'editar/:id', component: AgregarComponent},
            {path: 'buscar', component: BuscarComponent},
            {path: ':id', component: ErrezetaComponent},
            {path: '**', redirectTo: 'listado'}
        ]
    },
    { path: '404', component: ErrorPageComponent },
    { path: '**', redirectTo: '404' },
];
