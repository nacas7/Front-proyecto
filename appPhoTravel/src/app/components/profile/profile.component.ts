
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import { Photographer } from '../interface/interface.photographer';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formulario: FormGroup;
  idUsuario?: number;
  photographer: Photographer[];


  constructor(
    private usuariosServices: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute


  ) {

    this.photographer = []
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl()

    })
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.idUsuario = params.idusuario;
      // const response = await this.usuariosServices.getById(params.idusuario)
      // this.formulario.get('nombre')?.setValue(response.nombre);
      // this.formulario.get('apellidos')?.setValue(response.apellidos)
    })

  }

  // async onUpDate() {
  //   console.log(this.formulario.value)
  //   await this.usuariosServices.upDate(this.formulario.value)
  //   this.formulario.reset()
  // }

  async onSubmit() {
    this.formulario = await this.usuariosServices.upDateById(this.formulario.value, this.idUsuario)
  }
  // onSubmit() {
  //   let formdata = new FormData();
  //   formdata.append('id', this.formulario.idusuarios);

  //   formdata.append('nombre', this.formulario.value.nombre);
  //   formdata.append('username', this.formulario.value.apellidos);
  //   formdata.append('email', this.formulario.value.email);

  //   this.usuariosServices
  //     .upDateById(formdata)
  //     .then((response) => {
  //       if (response) {
  //         this.router.navigate(['/home']);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }


}
