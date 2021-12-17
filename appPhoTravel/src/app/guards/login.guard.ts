import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
  ) {

  }
  canActivate() {
    if (localStorage.getItem('token_photravel')) {

      return true;
    } else {

      this.router.navigate(['/home'])
      return false;

    }
  }

}
