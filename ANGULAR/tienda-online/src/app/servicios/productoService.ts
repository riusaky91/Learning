import { EventEmitter, Injectable } from '@angular/core'; //Importa EventEmitter para crear eventos personalizados y Injectable para marcar esta clase como un servicio que puede ser inyectado en otros componentes o servicios
import { ProductModel } from '../models/product.model';
import { DatosService } from './datos-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root', //Indica que este servicio estará disponible en toda la aplicación, lo que permite inyectarlo en cualquier componente o servicio que lo necesite
})
export class ProductoService {


  // Variable para el ID siguiente y unico

  //Productos: ProductModel[] = []; //Lista de productos que se mostrará en el componente, inicializada como un array vacío

  productos: {[llave:string]: ProductModel} = {}; //Lista de productos que se mostrará en el componente, inicializada como un objeto vacío con claves de tipo string y valores de tipo ProductModel
  productosActualizados = new Subject<{[llave:string]: ProductModel}>(); //Subject para emitir la lista actualizada de productos a los componentes que estén suscritos a este Subject, lo que permite que los componentes se actualicen automáticamente cuando se agregue, edite o elimine un producto en la lista de productos del servicio

  //private siguienteId: number = 1; //Variable para asignar un ID único a cada nuevo producto agregado, inicializada en 1 

  constructor(private datosService: DatosService) { //Inyección del servicio DatosService en el constructor para poder acceder a sus métodos y propiedades, lo que permite obtener los datos de los productos almacenados en la base de datos

    //this.iniciañlizarProductos(); //Llamo a la función para inicializar la lista de productos con algunos productos de ejemplo al crear una instancia del servicio
  }

  /*private iniciañlizarProductos() {
    const producto1 = { id: this.siguienteId++, descripcion: 'Producto 1', precio: 100 }; //Creo el primer producto con un ID único y lo agrego a la lista de productos
    const producto2 = { id: this.siguienteId++, descripcion: 'Producto 2', precio: 200 }; //Creo el segundo producto con un ID único y lo agrego a la lista de productos
    const producto3 = { id: this.siguienteId++, descripcion: 'Producto 3', precio: 300 }; //Creo el tercer producto con un ID único y lo agrego a la lista de productos
    this.productos.push(producto1, producto2, producto3); //Agrego los productos de ejemplo a la lista de productos
  }*/

  listarProductos() {
    return this.datosService.listarProductos(); //Llamo al método listarProductos del servicio DatosService para obtener la lista de productos almacenados en la base de datos, lo que permite mostrar la lista de productos actualizada en el componente
  }

 
  detalleProducto = new EventEmitter<ProductModel>(); //Evento personalizado para emitir el detalle de un producto seleccionado

  //Función para agregar un nuevo producto a la lista de productos
  guardarProducto(producto: ProductModel, llave: string | null = null) { //Recibe el producto a agregar y la llave del producto a editar (si se está editando un producto existente)
    if (llave === null) { //Si la llave es null, significa que se está agregando un nuevo producto, por lo que asigno un ID único al producto utilizando la variable siguienteId y luego incremento la variable siguienteId para el próximo producto  
      this.datosService.agregarProducto(producto).subscribe(() => { //Llamo al método guardarProducto del servicio DatosService para agregar el nuevo producto a la base de datos, y me suscribo al Observable que devuelve para realizar acciones después de que se complete la operación
        this.refrescarProductos(); //Después de agregar el nuevo producto a la base de datos, llamo al método refrescarProductos para obtener la lista actualizada de productos y mostrarla en el componente
      }); 
    }
    else { //Si la llave no es null, significa que se está editando un producto existente, por lo que actualizo el producto en la base de datos utilizando la función guardarProducto del servicio DatosService, pasando el producto actualizado y la llave del producto a editar
      this.datosService.modificarproducto(producto, llave).subscribe(() => { //Llamo al método modificarProducto del servicio DatosService para actualizar el producto existente en la base de datos, y me suscribo al Observable que devuelve para realizar acciones después de que se complete la operación
        this.refrescarProductos(); //Después de actualizar el producto en la base de datos, llamo al método refrescarProductos para obtener la lista actualizada de productos y mostrarla en el componente
      });

    }
  }


  getProductoPorLlave(llave: string): ProductModel | undefined { //Función para obtener un producto por su llave, recibe la llave del producto a buscar y devuelve el producto encontrado o undefined si no se encuentra
    return this.productos[llave]; //Devuelvo el producto encontrado en la lista de productos utilizando la llave como índice, lo que permite obtener el detalle del producto seleccionado para mostrarlo en el componente 
  }

  eliminarProducto(llave: string) { //Función para eliminar un producto por su llave, recibe la llave del producto a eliminar
    return this.datosService.eliminarProducto(llave).subscribe(() => { //Llamo al método eliminarProducto del servicio DatosService para eliminar el producto de la base de datos utilizando la URL construida con la llave del producto, y me suscribo al Observable que devuelve para realizar acciones después de que se complete la operación
      this.refrescarProductos(); //Después de eliminar el producto de la base de datos, llamo al método refrescarProductos para obtener la lista actualizada de productos y mostrarla en el componente
    });
  }

  private refrescarProductos() { //Función para obtener la lista actualizada de productos desde la base de datos y emitirla a los componentes suscritos al Subject productosActualizados, lo que permite que los componentes se actualicen automáticamente cuando se agregue, edite o elimine un producto en la lista de productos del servicio
    return this.listarProductos().subscribe((productos: {[llave:string]: ProductModel}) => { //Llamo al método listarProductos para obtener la lista de productos actualizada desde la base de datos, y me suscribo al Observable que devuelve para recibir la lista de productos actualizada
      this.setProductos(productos); //Establezco la lista de productos actualizada en el servicio utilizando la función setProductos, lo que permite mantener la lista de productos del servicio actualizada con los datos obtenidos desde la base de datos
      
    });
  }

  setProductos(productos: {[llave:string]: ProductModel}) { //Función para establecer la lista de productos en el servicio, recibe la lista de productos a establecer y la asigna a la variable productos del servicio, lo que permite actualizar la lista de productos en el servicio con los datos obtenidos desde la base de datos
    this.productos = productos; //Asigno la lista de productos recibida a la variable productos del servicio para mantenerla actualizada con los datos de la base de datos
    this.productosActualizados.next(this.productos); //Emito la lista de productos actualizada a los componentes suscritos al Subject productosActualizados para que se actualicen automáticamente con los datos de la base de datos
  }
}
