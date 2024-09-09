import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cambio-nombre',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './cambio-nombre.component.html',
  styleUrl: './cambio-nombre.component.scss',
})
export class CambioNombreComponent {
  usuarioService = inject(UsuarioService);
  router = inject(Router)
  cambiarNombre(nuevoNombre: string) {
    this.usuarioService.nombre.set(nuevoNombre);
    this.router.navigate(["/cambio-nombre"])

 }

}
