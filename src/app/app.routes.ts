import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { CambioNombreComponent } from './pages/cambio-nombre/cambio-nombre.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'cambio-nombre',
    component: CambioNombreComponent,
  },


];

