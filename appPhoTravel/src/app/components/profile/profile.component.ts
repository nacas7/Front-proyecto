
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formulario: FormGroup;
  idusuarios!: number;
  constructor(
    private usuariosServices: UsuariosService,
    private activateRoute: ActivatedRoute

  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl()

    })
  }


  ngOnInit(): void {
    this.activateRoute.params.subscribe(async params => {
      this.idusuarios = params.idusuarios;
      const response = this.usuariosServices.getById(params.idusuarios)


    })
  }


  async onUpDate() {
    await this.usuariosServices.update(this.formulario.value, this.idusuarios!)
    // this.formulario.reset()
  }

}
