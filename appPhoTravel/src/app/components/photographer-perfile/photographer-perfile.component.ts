import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPhotographersService } from 'src/app/all-photographers.service';
import { PerfileService } from 'src/app/perfile.service';

import { Photographer } from '../interface/interface.photographer';

@Component({
  selector: 'app-photographer-perfile',
  templateUrl: './photographer-perfile.component.html',
  styleUrls: ['./photographer-perfile.component.css']
})
export class PhotographerPerfileComponent implements OnInit {

  idusuario!: number;
  photographer!: Photographer;

  constructor(private perfilServeices: PerfileService,
    private activateRoute: ActivatedRoute, //referencia ruta activa
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.activateRoute.params.subscribe(async params => {

      let response = await this.perfilServeices.getById(Number(params.idusuario));
      this.photographer = response[0]
    })
  }


}
