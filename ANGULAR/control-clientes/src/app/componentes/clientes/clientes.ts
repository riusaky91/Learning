import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Cliente as ClienteService } from '../../servicios/cliente'; // Importa el servicio Cliente para obtener la lista de clientes se le asigna un alias ClienteService para evitar conflictos de nombres con el modelo ClienteModel
import { ClienteModel } from '../../modelo/clienteModel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, RouterModule, FormsModule], // Importa CommonModule y RouterModule para poder utilizar directivas y funcionalidades de Angular en la plantilla del componente
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {


  clientes: ClienteModel[] | null = null; // Propiedad para almacenar la lista de clientes obtenida del servicio, inicializada como null para indicar que aún no se ha cargado la información
  cliente: ClienteModel = { nombre: '', apellido: '', email: '', saldo: 0 }; // Propiedad para almacenar los datos del nuevo cliente que se va a agregar, inicializada con valores por defecto
  @ViewChild('botonCerrar') botonCerrar!: ElementRef; // Referencia al botón de cierre del modal para poder cerrarlo programáticamente después de agregar un cliente


  constructor(private clientesServicio: ClienteService) { } // Inyecta el servicio ClienteService en el constructor para poder utilizarlo en el componente y obtener la lista de clientes desde Firestore

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

  agregarCliente(clienteForm: NgForm) {
    const { value, valid } = clienteForm; // Desestructura el objeto NgForm para obtener los valores del formulario y su validez
    
    if (valid) { // Verifica si el formulario es válido antes de proceder a agregar el cliente
      this.clientesServicio.agregarCliente(value); // Llama al método del servicio para agregar el nuevo cliente a Firestore
      clienteForm.resetForm(); // Resetea el formulario después de agregar el cliente para limpiar los campos y restablecer la validez del formulario
      this.cerrarModal(); // Llama al método para cerrar el modal después de agregar el cliente
    }
  }

  private cerrarModal() { // Método privado para cerrar el modal después de agregar un cliente
    if (this.botonCerrar) { // Verifica que la referencia al botón de cierre del modal esté definida antes de intentar hacer clic en él
      this.botonCerrar.nativeElement.click(); // Simula un clic en el botón de cierre del modal para cerrarlo programáticamente
    }
  }

}

