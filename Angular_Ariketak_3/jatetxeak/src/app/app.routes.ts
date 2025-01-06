import { Routes } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';
import { TaulaComponent } from './Components/taula/taula.component';
import { MapaComponent } from './Components/mapa/mapa.component';

export const routes: Routes = [
    { path: '', component: TaulaComponent, title: 'Taula' },
    { path: "details/:municipality", component: DetailsComponent, title: 'Details' },
    { path: 'mapa', component: MapaComponent },
    { path: 'mapa/:lat/:lon', component: MapaComponent },
];
