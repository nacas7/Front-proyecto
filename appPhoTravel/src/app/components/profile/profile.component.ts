
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PerfileService } from 'src/app/perfile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  formulario: FormGroup;
  constructor(private prefileServices: PerfileService,
  ) {
    this.formulario = new FormGroup({
      ubication: new FormControl(),
      web: new FormControl(),

    });
  }


  ngOnInit(): void {
  }

  async onSubmit() {
    await this.prefileServices.register(this.formulario.value)
  }
}
