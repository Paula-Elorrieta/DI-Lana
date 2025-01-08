import { Routes } from '@angular/router';
import { FullScreenComponent } from './mapas/components/full-screen/full-screen.component';
import { ZoomRangeComponent } from './mapas/components/zoom-range/zoom-range.component';
import { MarcadoresComponent } from './mapas/components/marcadores/marcadores.component';
import { PropiedadesComponent } from './mapas/components/propiedades/propiedades.component';

export const routes: Routes = [
	{
    	path: 'mapas',
    	children: [
        	{ path: 'fullscreen', component: FullScreenComponent },
        	{ path: 'zoom-range', component: ZoomRangeComponent },
        	{ path: 'marcadores', component: MarcadoresComponent },
        	{ path: 'propiedades', component: PropiedadesComponent },
        	{ path: '**', redirectTo: 'fullscreen' },
    	]
	},
	{
    	path: '**',
    	redirectTo: 'mapas'
	}
];
