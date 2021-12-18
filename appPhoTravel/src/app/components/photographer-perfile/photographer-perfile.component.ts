import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPhotographersService } from 'src/app/all-photographers.service';


import { Photographer } from '../interface/interface.photographer';

@Component({
  selector: 'app-photographer-perfile',
  templateUrl: './photographer-perfile.component.html',
  styleUrls: ['./photographer-perfile.component.css']
})
export class PhotographerPerfileComponent implements OnInit {

  idusuario!: number;
  @Input() photographer!: Photographer;

  constructor(private allphotographer: AllPhotographersService,
    private activateRoute: ActivatedRoute, //referencia ruta activa
    private router: Router
  ) {


  }

  ngOnInit() {

    // this.activateRoute.params.subscribe(async params => {

    //   let response = await this.allphotographer.getById(Number(params.idusuario));
    //   this.photographer = response[0]
    // })
  }


}
