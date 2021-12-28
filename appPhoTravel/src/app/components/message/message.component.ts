import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MesagesService } from 'src/app/mesages.service';
import { Photographer } from '../interface/interface.photographer';
import { Messages } from '../interface/messages.interface';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  currentDate: Date;
  filterCity = '';
  mensajesRecibidos: any;
  usuarioRecibe!: any;
  message!: string;
  idphotographer: string = '';
  formulario: FormGroup

  @Input() idusuario!: Photographer;



  @Output() respuesta: EventEmitter<Messages>;

  @Output() eliminarMensaje: EventEmitter<Messages>;

  constructor(
    private messageService: MesagesService,
    private activaredRoute: ActivatedRoute
  ) {
    this.currentDate = new Date();
    this.formulario = new FormGroup({
      message: new FormControl()
    })
    this.respuesta = new EventEmitter();
    this.eliminarMensaje = new EventEmitter();

  }

  async ngOnInit() {
    this.activaredRoute.params.subscribe((params) => {
      this.idphotographer = params.photographerId;

    })
    try {
      const response = await this.messageService.getAllBy()
      this.mensajesRecibidos = response;


    } catch (error) {
      console.log(error);

    }

    try {

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

  async deleteMessage() {
    const eliminar = await this.messageService.deleteByMessage()
    this.eliminarMensaje.emit(eliminar)
  }

  enviarRespuesta(message: string) {
    // this.respuesta.emit(message)
    console.log(message)
  }


  deleteMessages($event: any) {
    console.log($event)
  }






}
