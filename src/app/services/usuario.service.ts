import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {  }

  nombre = signal<string>("");
  nickname = '';
}
