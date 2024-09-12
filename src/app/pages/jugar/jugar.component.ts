import { Component, inject, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { CrearSala } from '../../interfaces/crearSala';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.scss',
})
export class JugarComponent implements OnInit {
  serverService = inject(ServerService);
  usuarioService = inject(UsuarioService);
  esPrivada = input();
  id = input<string>();

  ngOnInit(): void {
    if (!this.esPrivada() && !this.id()) {
      this.serverService.crearSala();
    } else if (this.id()){
      console.log("intentado unirse", this.id())
      this.serverService.unirseSala(parseInt(this.id()!));
    } else {
      this.serverService.crearSala(true);
    }
  }
}
