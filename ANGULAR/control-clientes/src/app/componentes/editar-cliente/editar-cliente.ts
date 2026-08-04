import { Component } from '@angular/core';
import { ClienteModel } from '../../modelo/clienteModel';
import { Cliente as ClienteService } from '../../servicios/cliente'; // Importa el servicio Cliente para obtener la lista de clientes se le asigna un alias ClienteService para evitar conflictos de nombres con el modelo ClienteModel
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router'; // Importa ActivatedRoute para acceder a los parámetros de la ruta y Router para navegar entre rutas  
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  imports: [FormsModule, RouterLink, RouterModule], // Importa FormsModule para poder utilizar formularios en la plantilla del componente y RouterLink para poder navegar entre rutas desde la plantilla
  templateUrl: './editar-cliente.html',
  styleUrl: './editar-cliente.css',
})
export class EditarCliente {

  cliente: ClienteModel = { nombre: '', apellido: '', email: '', saldo: 0 }; // Propiedad para almacenar los datos del cliente que se va a editar, inicializada con valores por defecto

  id: string | null = null; // Propiedad para almacenar el ID del cliente que se va a editar, inicializada como null para indicar que aún no se ha recibido el ID

  constructor(private clientesServicio: ClienteService, private route: ActivatedRoute, private router: Router) { } // Inyecta el servicio ClienteService, ActivatedRoute y Router en el constructor para poder utilizarlos en el componente

  ngOnInit() { // Al inicializar el componente, se obtiene el ID del cliente desde la ruta y se suscribe al servicio para obtener los datos del cliente
    this.id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID del cliente desde la ruta utilizando ActivatedRoute
    if (this.id) { // Verifica si se ha recibido un ID válido antes de proceder a obtener los datos del cliente
      this.clientesServicio.getClientePorId(this.id).subscribe(cliente => {
        if (cliente) { // Verifica si se ha obtenido un cliente válido antes de asignarlo a la propiedad 'cliente'
          this.cliente = cliente; // Asigna los datos del cliente obtenidos desde el servicio a la propiedad 'cliente'
        } else { // Si no se encuentra el cliente, se maneja el caso de error, por ejemplo, redirigiendo al usuario a otra página o mostrando un mensaje de error
          console.error('Cliente no encontrado');
          this.router.navigate(['/']); // Redirige al usuario a la página principal si no se encuentra el cliente
        }
      });
    } else { // Si no se recibe un ID válido, se maneja el caso de error, por ejemplo, redirigiendo al usuario a otra página o mostrando un mensaje de error
      console.error('ID de cliente no proporcionado');
      this.router.navigate(['/']); // Redirige al usuario a la página principal si no se proporciona un ID válido   
    }
  }

  guardarCambios(clienteForm: NgForm) { // Método para guardar los cambios realizados en los datos del cliente
    const { value, valid } = clienteForm; // Desestructura el objeto NgForm para obtener los valores del formulario y su validez
    if (valid && this.id) { // Verifica si el formulario es válido y si se ha recibido un ID válido antes de proceder a guardar los cambios
      this.clientesServicio.modificarCliente(this.id, value); // Llama al método del servicio para modificar los datos del cliente en Firestore
      this.router.navigate(['/']); // Redirige al usuario a la página principal después de guardar los cambios
    }
  }

  eliminarCliente() {// Método para eliminar el cliente actual
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) { // Muestra un cuadro de confirmación antes de eliminar el cliente
      if (this.id) {
        this.clientesServicio.eliminarCliente(this.cliente); // Llama al método del servicio para eliminar el cliente de Firestore
        this.router.navigate(['/']);
      }
    }
    
  }
}
