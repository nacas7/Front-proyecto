
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import { Photographer } from '../interface/interface.photographer';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formulario: FormGroup;
  idUsuario?: number;
  // photographer!: Photographer;
  @Input() usuarioId!: Photographer;




  constructor(
    private usuariosServices: UsuariosService,
    private activatedRoute: ActivatedRoute



  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', ([
        Validators.required
      ]))

    })
  }

  async ngOnInit() {
    // this.activatedRoute.params.subscribe(async params => {
    //   this.usuarioId = params.idUsuario;

    // })
    const response = await this.usuariosServices.getById()
    this.formulario?.get('nombre')?.setValue(response.nombre),
      this.formulario?.get('apellidos')?.setValue(response.apellidos)
  }

  async onSubmit() {
    this.formulario = await this.usuariosServices.updatePublic(this.formulario.value)
    Swal.fire({
      title: 'Datos actualizados',
      icon: 'success'
    })
  };


  // checkError(controlName: string, error: string): boolean {
  //   return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  // };


}
