import { Component, OnInit } from '@angular/core';
import { PerfileService } from 'src/app/perfile.service';
import { UsuariosService } from 'src/app/usuarios.service';
import { Photographer } from '../interface/interface.photographer';

@Component({
  selector: 'app-photographer-perfile',
  templateUrl: './photographer-perfile.component.html',
  styleUrls: ['./photographer-perfile.component.css']
})
export class PhotographerPerfileComponent implements OnInit {

  photographer: Photographer[];
  constructor(private perfilService: PerfileService,
    private usuarioService: UsuariosService
  ) {
    this.photographer = []
  }

  ngOnInit() {
    this.perfilService.getByInfo(this.photographer)


  }

}
