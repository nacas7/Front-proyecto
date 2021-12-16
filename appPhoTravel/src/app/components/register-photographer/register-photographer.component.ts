import { Component, OnInit } from '@angular/core';
import { PerfileService } from 'src/app/perfile.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Photographer } from '../interface/interface.photographer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-photographer',
  templateUrl: './register-photographer.component.html',
  styleUrls: ['./register-photographer.component.css']
})
export class RegisterPhotographerComponent implements OnInit {

  formulario: FormGroup;
  photographer!: Photographer;

  constructor(
    private prefileServices: PerfileService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      ubication: new FormControl(),
      web: new FormControl(),
      description: new FormControl()

    })
  }

  ngOnInit() {

  }

  async onSubmit() {
    await this.prefileServices.register(this.formulario.value)
    this.formulario.reset()

  };

  delete(idusuario: number) {
    this.prefileServices.deleteById(idusuario)


  }

}
