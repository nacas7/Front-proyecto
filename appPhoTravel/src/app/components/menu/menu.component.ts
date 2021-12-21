import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;

  constructor(private usuarioService: UsuariosService,
    private router: Router) {
    this.isLogged = false;
  }

  ngOnInit(): void {
    if (localStorage.getItem('token_photravel')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.usuarioService.loginObs().subscribe((result) => {
      // console.log('Acción de login', result);
      this.isLogged = result;
    })

  }

  onClickLogout() {
    const seguro = Swal;
    if (seguro) {
      localStorage.removeItem('token_photravel');
      this.usuarioService.logged(false);
      this.router.navigate(['/home']);
    }
  }




}
