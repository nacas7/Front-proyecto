import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MesagesService } from 'src/app/mesages.service';
import { Photographer } from '../interface/interface.photographer';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  mensajesRecibidos: any;
  usuarioRecibe!: any;
  message!: string;
  idphotographer: string = '';
  formulario: FormGroup
  @Input() idusuario!: Photographer;
  constructor(
    private messageService: MesagesService,
    private activaredRoute: ActivatedRoute
  ) {
    this.formulario = new FormGroup({
      message: new FormControl()
    })
    this.activaredRoute.params.subscribe((params) => {
      this.idphotographer = params.photographerId;

    })

  }


  async ngOnInit() {
    try {
      const response = await this.messageService.getAllBy()
      this.mensajesRecibidos = response;


    } catch (error) {
      console.log(error);

    }

    try {
      console.log(this.idusuario)
      const responde = await this.messageService.getAllSent()
      this.usuarioRecibe = responde;

    } catch (error) {
      console.log(error)
    }

  };

  async onSubmit() {

    try {
      const newMessage = {
        ...this.formulario.value,
        idSentTo: this.idphotographer
      }
      await this.messageService.createMessage(newMessage)

    } catch (error) {
      console.log(error)
    }
  }

};
