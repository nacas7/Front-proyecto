import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuariosServices: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      username: new FormControl(

      ),
      email: new FormControl,
      password: new FormControl,
      repit_password: new FormControl
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    await this.usuariosServices.register(this.formulario.value)
    this.router.navigate(['/login'])
  }

}
