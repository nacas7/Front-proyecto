import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-profile-private',
  templateUrl: './profile-private.component.html',
  styleUrls: ['./profile-private.component.css']
})
export class ProfilePrivateComponent implements OnInit {

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  async deleteUser() {
    const seguro = confirm('¿Quieres eliminar la cuenta?')
    if (seguro) {
      await this.usuarioService.deleteById();
      localStorage.removeItem('token_photravel');
      this.usuarioService.logged(false);
      this.router.navigate(['/home'])
    }
  }

}
