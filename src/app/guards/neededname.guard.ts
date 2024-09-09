import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router, UrlTree} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const needednameGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router =  inject(Router)
  if (usuarioService.nombre())
  return true;
  const urlTree = router.parseUrl("/cambio-nombre");
  return new RedirectCommand(urlTree, {skipLocationChange: true});
  
};
