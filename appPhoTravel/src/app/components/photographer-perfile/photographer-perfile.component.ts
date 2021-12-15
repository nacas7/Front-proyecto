import { Component, OnInit } from '@angular/core';
import { PerfileService } from 'src/app/perfile.service';
import { Photographer } from '../interface/interface.photographer';

@Component({
  selector: 'app-photographer-perfile',
  templateUrl: './photographer-perfile.component.html',
  styleUrls: ['./photographer-perfile.component.css']
})
export class PhotographerPerfileComponent implements OnInit {

  photographer: Photographer[];
  constructor(private perfilService: PerfileService) {
    this.photographer = []
  }

  async ngOnInit() {
    const response = await this.perfilService.getAll();
    this.photographer = response;
  }

}
