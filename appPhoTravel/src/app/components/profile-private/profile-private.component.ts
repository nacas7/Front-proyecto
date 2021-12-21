import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-profile-private',
  templateUrl: './profile-private.component.html',
  styleUrls: ['./profile-private.component.css']
})
export class ProfilePrivateComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])

    })
  }

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
  };

  checkError(controlName: string, error: string): boolean {
    return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  };

}
