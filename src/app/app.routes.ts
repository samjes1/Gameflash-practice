import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { CambioNombreComponent } from './pages/cambio-nombre/cambio-nombre.component';
import { needednameGuard } from './guards/neededname.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ needednameGuard ]
  },

  {
    path: 'jugar',
    component: JugarComponent,
    canActivate: [ needednameGuard ]
  },

  {
    path: 'jugar/:id',
    component: JugarComponent,
    canActivate: [ needednameGuard ]
  },

  {
    path: 'jugar-privada',
    component: JugarComponent,
    canActivate: [ needednameGuard ],
    data: {esPrivada: true}
  },

  {
    path: 'cambio-nombre',
    component: CambioNombreComponent,
  },


];

