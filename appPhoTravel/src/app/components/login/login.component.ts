import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

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
      email: new FormControl,
      password: new FormControl
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.error = '';
    const response = await this.UsuariosService.login(this.formulario.value)
    if (response.error) {
      this.error = response.error;
    } else {
      console.log(response.token)
    }


  }

}


//ME FALTAN LAS CORS MIRAR PORQUE
//ALMACENAR LUEGO EL LOCALSTORAGE Y navigate(['/home'])