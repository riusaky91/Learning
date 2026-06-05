import { Component } from '@angular/core';
import { Cliente as ClienteService } from '../../servicios/cliente'; // Importa el servicio Cliente para obtener la lista de clientes se le asigna un alias ClienteService para evitar conflictos de nombres con el modelo ClienteModel
import { ClienteModel } from '../../modelo/clienteModel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, RouterModule],
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
/* Codigo anterior para calcular el saldo total de los clientes, se ha comentado porque no se está utilizando en la plantilla HTML y podría generar confusión al no estar implementado completamente en el componente. Si se desea implementar esta funcionalidad, se recomienda crear un método separado que recorra la lista de clientes y sume sus saldos para obtener el total, asegurándose de manejar casos donde el saldo pueda ser undefined o null.
  getSaldoTotal(): string | number { // Método para calcular el saldo total de todos los clientes
    let saldoTotal = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        if (cliente.saldo) { // Verifica que el cliente tenga un saldo definido antes de sumarlo al total
          saldoTotal += cliente.saldo; // Suma el saldo de cada cliente al total 
        }
      });
    }
    return saldoTotal; 
  }
*/

getSaldoTotal(): number { // Método para calcular el saldo total de todos los clientes
  return this.clientes ? this.clientes.reduce((total, cliente) => total + (cliente.saldo || 0), 0) : 0; // Utiliza reduce para sumar los saldos de los clientes, manejando casos donde el saldo pueda ser undefined o null
}

}

