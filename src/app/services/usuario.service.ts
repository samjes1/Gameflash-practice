import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { 

    //cuando se inicie 
      const nombreLocalStorage = localStorage.getItem("nombre");
      if (nombreLocalStorage) this.nombre.set(nombreLocalStorage);
   }

  nombre = signal<string>("");
  nickname = '';

  guardarNombreLocalStorage = effect(() => localStorage.setItem('nombre', this.nombre()))

}
