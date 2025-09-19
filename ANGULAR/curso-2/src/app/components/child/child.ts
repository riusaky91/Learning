import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  // -----------------------------------------input--------------------------------------

  @Input() // decorador para recibir datos del componente padre
  msg: String = '';// variable para recibir el dato del componente padre


  // -----------------------------------------input con signal--------------------------------------

  message = input<String>('');// variable para recibir el dato del componente padre con signal

  // -----------------------------------------output--------------------------------------

  userName: string = 'Marlon';// variable para enviar el dato al componente padre

  //@Output()
  //login: EventEmitter<any> = new EventEmitter<any>();// se crea el evento para enviar el dato al componente padre

  handleLogin() {// funcion para emitir el evento al componente padre
    this.login.emit(this.userName);// se emite el evento con el dato de la variable userName
  }

  // -----------------------------------------output con signal--------------------------------------

  login = output<any>();// se crea el evento para enviar el dato al componente padre con signal

  
  

}
