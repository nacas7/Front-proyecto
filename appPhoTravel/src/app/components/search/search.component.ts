import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  activo: boolean;

  constructor() {
    this.activo = true;
  }

  ngOnInit(): void {
  }
  mostrarParrafo() {
    if (this.activo === true) {
      this.activo = false;
    } else {
      this.activo = true;
    }
  }

}
