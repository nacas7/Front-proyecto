import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  error: string;

  constructor(private UsuariosService: UsuariosService,
    private router: Router) {
    this.error = '';
    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.error = '';
    const response = await this.UsuariosService.login(this.formulario.value)
    console.log(response)
    if (response.error) {
      this.error = response.error;
    } else {
      localStorage.setItem('token_photravel', response.token);
      Swal.fire({
        title: 'Login correcto',
        icon: 'success',
      })


      this.UsuariosService.logged(true);
      this.router.navigate(['/profile']);

    }

  }

  checkError(controlName: string, error: string): boolean {
    return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  };



}
