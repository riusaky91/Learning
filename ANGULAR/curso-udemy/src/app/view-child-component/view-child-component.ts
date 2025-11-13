import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-component',
  imports: [],
  templateUrl: './view-child-component.html',
  styleUrl: './view-child-component.css'
})
export class ViewChildComponent {

@ViewChild('referenciaInput') inputElemento!: ElementRef; // Referencia al elemento de entrada se va inicializar despues del ngAfterViewInit

  cambiarTexto() {
    this.inputElemento.nativeElement.value = 'Texto cambiado desde ViewChild!'; // Cambia el valor del input

  }

}
