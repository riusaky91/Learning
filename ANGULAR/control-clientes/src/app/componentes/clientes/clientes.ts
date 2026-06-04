import { Component } from '@angular/core';
import { Cliente as ClienteService } from '../../servicios/cliente'; // Importa el servicio Cliente para obtener la lista de clientes se le asigna un alias ClienteService para evitar conflictos de nombres con el modelo ClienteModel
import { ClienteModel } from '../../modelo/clienteModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: ClienteModel[] | null = null;
  constructor(private clientesServicio: ClienteService) { }
  ngOnInit() { // Al inicializar el componente, se suscribe al servicio para obtener la lista de clientes 
    this.clientesServicio.getClientes().subscribe(clientes => { 
      this.clientes = clientes; // Almacena el listado en la propiedad 'clientes' 
    }); 
  }
}

