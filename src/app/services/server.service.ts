import { inject, Inject, Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { UsuarioService } from './usuario.service';
import { CrearSala,  } from '../interfaces/crearSala';
import { UnirseSala } from '../interfaces/unirseSala';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  server = io("localhost:3000", {autoConnect: false});
  usuarioService = Inject(UsuarioService);
  

  constructor() { 
    this.server.on("connect", () => {
      console.log("Conectado a tu corazon")
    });
   
    this.server.on("sala", (args) => console.log(args))
    this.server.connect();
  }

  crearSala(esPrivada: boolean = false){
          const args: CrearSala = {
        publica: !esPrivada,
        nombreJugador: this.usuarioService.nombreJugadork
      };
      this.server.emitWithAck('crearSala', args).then((res) => {
        console.log('crear sala', res);
      })
  }

  unirseSala(id: number){
    const args: UnirseSala = {
      id,
      nombreJugador: this.usuarioService.nombreJugador
    } 
      this.server.emitWithAck('unirseSala', args).then((res) => {
      console.log('Resultado al unirse a la sala', res);
      })
    }
}