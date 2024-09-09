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
    path: 'cambio-nombre',
    component: CambioNombreComponent,
  },


];

