import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import Swal from 'sweetalert2';
import { Photographer } from '../interface/interface.photographer';

@Component({
  selector: 'app-profile-private',
  templateUrl: './profile-private.component.html',
  styleUrls: ['./profile-private.component.css']
})
export class ProfilePrivateComponent implements OnInit {

  formulario: FormGroup;

  @Input() usuarioId!: Photographer

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

  async ngOnInit() {
    const response = await this.usuarioService.getById()
    this.formulario?.get('email')?.setValue(response.email)

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



  async onSubmit() {
    // console.log(this.formulario)
    this.formulario = await this.usuarioService.updatePrivate(this.formulario.value)
    Swal.fire({
      title: 'Datos actualizados',
      icon: 'success'
    })
    this.router.navigate(['/home'])
  }

  checkError(controlName: string, error: string): boolean {
    return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  };
}
