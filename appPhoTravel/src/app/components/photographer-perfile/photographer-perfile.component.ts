import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfileService } from 'src/app/perfile.service';
import { Photographer } from '../interface/interface.photographer';

@Component({
  selector: 'app-photographer-perfile',
  templateUrl: './photographer-perfile.component.html',
  styleUrls: ['./photographer-perfile.component.css']
})
export class PhotographerPerfileComponent implements OnInit {

  idusuario!: number;
  photographer: Photographer[];

  constructor(private perfileServices: PerfileService,
    private activateRoute: ActivatedRoute, //referencia ruta activa
    private router: Router
  ) {
    this.photographer = [];

  }

  async ngOnInit() {
    this.photographer = await this.perfileServices.getById(this.photographer);
  }
  // ngOnInit(): void {
  //   this.activateRoute.params.subscribe((value) => {
  //     this.idusuario = value.idusuario
  //   });



  // }


}
