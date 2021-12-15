
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/usuarios.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private usuariosServices: UsuariosService,


  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl()

    })
  }


  ngOnInit(): void {

  }

  async onUpDate() {
    console.log(this.formulario.value)
    await this.usuariosServices.upData(this.formulario.value)
    this.formulario.reset()
  }

}
