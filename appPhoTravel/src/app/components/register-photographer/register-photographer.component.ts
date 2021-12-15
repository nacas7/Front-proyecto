import { Component, OnInit } from '@angular/core';
import { PerfileService } from 'src/app/perfile.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-photographer',
  templateUrl: './register-photographer.component.html',
  styleUrls: ['./register-photographer.component.css']
})
export class RegisterPhotographerComponent implements OnInit {

  formulario: FormGroup;
  constructor(private prefileServices: PerfileService) {
    this.formulario = new FormGroup({
      ubication: new FormControl(),
      web: new FormControl(),
      description: new FormControl()

    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.prefileServices.register(this.formulario.value)
    this.formulario.reset()

  };

}
