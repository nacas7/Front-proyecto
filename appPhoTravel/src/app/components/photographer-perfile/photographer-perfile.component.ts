import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPhotographersService } from 'src/app/all-photographers.service';
import { UsuariosService } from 'src/app/usuarios.service';


import { Photographer } from '../interface/interface.photographer';

@Component({
  selector: 'app-photographer-perfile',
  templateUrl: './photographer-perfile.component.html',
  styleUrls: ['./photographer-perfile.component.css']
})
export class PhotographerPerfileComponent implements OnInit {

  idusuario!: number;
  isLogged: boolean;
  @Input() photographer!: Photographer;

  constructor(private allphotographer: AllPhotographersService,
    private activateRoute: ActivatedRoute, //referencia ruta activa
    private router: Router,
    private usuarioService: UsuariosService
  ) {
    this.isLogged = false;

  }

  ngOnInit() {
    if (localStorage.getItem('token_photravel')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.usuarioService.loginObs().subscribe((result) => {
      console.log('Acción de login', result);
      this.isLogged = result;
    })

    // this.activateRoute.params.subscribe(async params => {

    //   let response = await this.allphotographer.getById(Number(params.idusuario));
    //   this.photographer = response[0]
    // })
  }

}
