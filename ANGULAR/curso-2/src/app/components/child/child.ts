import { Component, input, Input } from '@angular/core';

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

}
