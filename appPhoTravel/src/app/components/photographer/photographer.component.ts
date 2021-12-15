import { Component, OnInit } from '@angular/core';
import { PerfileService } from 'src/app/perfile.service';
import { Photographer } from '../interface/interface.photographer';


@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {

  photographer: Photographer[];

  constructor(
    private perfilService: PerfileService
  ) {
    this.photographer = [];

  }

  async ngOnInit() {
    this.photographer = await this.perfilService.getAll();

  }

}
