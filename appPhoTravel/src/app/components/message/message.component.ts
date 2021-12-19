import { Component, OnInit } from '@angular/core';
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
  idusuario: string = '';
  formulario: FormGroup
  constructor(
    private messageService: MesagesService,
    private activaredRoute: ActivatedRoute
  ) {
    this.formulario = new FormGroup({
      message: new FormControl()
    })
    this.activaredRoute.params.subscribe((params) => {
      this.idphotographer = params.photographerId;

      // this.activaredRoute.params.subscribe((params) => {
      //   this.idusuario = params.photographerId
      // })
    })
  }

  //cambiar mensajesRecibidos por usuarioRecibidos 
  //cambiar el método getAllBy por el otro

  async ngOnInit() {
    try {
      // console.log(this.idphotographer)

      const response = await this.messageService.getAllBy()
      console.log(response)
      this.mensajesRecibidos = response;
      // console.log(this.mensajesRecibidos)

    } catch (error) {
      console.log(error);

    }

    // try {
    //   this.usuarioRecibe = await this.messageService.getAllSent()

    // } catch (error) {
    //   console.log(error)
    // }

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
