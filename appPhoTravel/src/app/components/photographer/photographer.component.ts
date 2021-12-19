import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfileService } from 'src/app/perfile.service';
import { Photographer } from '../interface/interface.photographer';


@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {

  filterCity = '';
  photographers: Photographer[];
  @Input() photographer!: Photographer;

  constructor(
    private perfilService: PerfileService,
    private activateRoute: ActivatedRoute
  ) {
    this.photographers = [];

  }

  async ngOnInit() {
    this.photographers = await this.perfilService.getAll();

  }

}
