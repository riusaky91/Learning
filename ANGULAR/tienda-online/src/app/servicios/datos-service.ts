import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { LoginService } from './login-service';

@Injectable({
  providedIn: 'root',
})
export class DatosService {

  url:string = 'https://tienda-online-baeb5-default-rtdb.firebaseio.com/'; //URL base de la API REST para acceder a los datos de la tienda online, en este caso se utiliza Firebase Realtime Database como backend para almacenar los productos y sus detalles
  

  constructor(private http: HttpClient, private loginService: LoginService) { } //Inyección del servicio HttpClient en el constructor para poder realizar solicitudes HTTP a la API REST y obtener los datos de los productos almacenados en la base de datos


  listarProductos(): Observable<{[llave:string]: ProductModel}>{ //Función para listar los productos almacenados en la base de datos, devuelve un Observable que emite un objeto con claves de tipo string y valores de tipo ProductModel, donde cada clave representa el ID del producto y cada valor representa el modelo del producto con su descripción y precio
    const token = this.loginService.getIdToken(); //Obtengo el token de autenticación del servicio LoginService para incluirlo en la solicitud HTTP y autenticar la solicitud a la API REST, lo que permite acceder a los datos de los productos almacenados en la base de datos solo si el usuario ha iniciado sesión correctamente
    if (token) { //Si el token de autenticación está disponible, incluyo el token en la solicitud HTTP utilizando el método set de HttpHeaders para agregar un encabezado de autorización con el token, lo que permite autenticar la solicitud a la API REST y acceder a los datos de los productos almacenados en la base de datos
      return this.http.get<{[llave:string]: ProductModel}>(this.url + 'datos.json?auth=' + token); //Realiza una solicitud GET a la API REST para obtener la lista de productos almacenados en la base de datos, utilizando la URL base concatenada con 'datos.json' para indicar que se está trabajando con la colección de productos, y pasando el token de autenticación como parámetro de consulta para autenticar la solicitud
    }
    else { //Si el token de autenticación no está disponible, significa que el usuario no ha iniciado sesión correctamente, por lo que devuelvo un Observable que emite un objeto vacío para indicar que no se pueden obtener los datos de los productos almacenados en la base de datos sin autenticación
      return new Observable<{[llave:string]: ProductModel}>((observer) => { //Creo un nuevo Observable que emite un objeto vacío, utilizando el constructor de Observable para crear un Observable personalizado que emite un objeto vacío cuando se suscribe, lo que permite manejar la situación en la que el usuario no ha iniciado sesión correctamente y no se pueden obtener los datos de los productos almacenados en la base de datos sin autenticación
        observer.next({}); //Emito un objeto vacío para indicar que no se pueden obtener los datos de los productos almacenados en la base de datos sin autenticación
        observer.complete(); //Completo el Observable para indicar que no se emitirán más valores, lo que permite finalizar la suscripción al Observable después de emitir el objeto vacío
      }); 
    }
  } 
  

  agregarProducto(producto: ProductModel): Observable<any> { //Función para guardar un nuevo producto o actualizar un producto existente en la base de datos, recibe el producto a guardar y la llave del producto a editar (si se está editando un producto existente), devuelve un Observable que emite void cuando la operación se completa 
    const token = this.loginService.getIdToken(); //Obtengo el token de autenticación del servicio LoginService para incluirlo en la solicitud HTTP y autenticar la solicitud a la API REST, lo que permite agregar un nuevo producto a la base de datos solo si el usuario ha iniciado sesión correctamente
    if (!token) { //Si el token de autenticación no está disponible, significa que el usuario no ha iniciado sesión correctamente, por lo que devuelvo un Observable que emite void para indicar que no se puede agregar un nuevo producto a la base de datos sin autenticación   
      return new Observable<void>((observer) => { //Creo un nuevo Observable que emite void, utilizando el constructor de Observable para crear un Observable personalizado que emite void cuando se suscribe, lo que permite manejar la situación en la que el usuario no ha iniciado sesión correctamente y no se puede agregar un nuevo producto a la base de datos sin autenticación
        observer.next(); //Emito void para indicar que no se puede agregar un nuevo producto a la base de datos sin autenticación
        observer.complete(); //Completo el Observable para indicar que no se emitirán más valores, lo que permite finalizar la suscripción al Observable después de emitir void
      });
    }
    return this.http.post(this.url + 'datos.json?auth=' + token, producto); //Realiza una solicitud POST a la API REST para agregar un nuevo producto a la base de datos, utilizando la URL base concatenada con 'datos.json' para indicar que se está trabajando con la colección de productos, y pasando el token de autenticación como parámetro de consulta para autenticar la solicitud, y pasando el producto a agregar como cuerpo de la solicitud para que se guarde en la base de datos  
  }

  modificarproducto(producto: ProductModel, llave: string): Observable<any> { //Función para modificar un producto existente en la base de datos, recibe el producto actualizado y la llave del producto a editar, devuelve un Observable que emite void cuando la operación se completa
    const token = this.loginService.getIdToken(); //Obtengo el token de autenticación del servicio LoginService para incluirlo en la solicitud HTTP y autenticar la solicitud a la API REST, lo que permite modificar un producto existente en la base de datos only if the user has logged in correctly
    const url_modificar = `${this.url}datos/${llave}.json?auth=${token}`; //Construye la URL para acceder al producto específico a modificar en la base de datos, utilizando la URL base concatenada con 'datos/' y la llave del producto, seguida de '.json' para indicar que se está trabajando con un recurso específico, y pasando el token de autenticación como parámetro de consulta para autenticar la solicitud
    return this.http.put(url_modificar, producto); //Realiza una solicitud PUT a la API REST para actualizar el producto existente en la base de datos, utilizando la URL construida para acceder al producto específico, y pasando el producto actualizado como cuerpo de la solicitud para que se guarde en la base de datos
  }

  eliminarProducto(llave: string): Observable<any> { //Función para eliminar un producto existente en la base de datos, recibe la llave del producto a eliminar, devuelve un Observable que emite void cuando la operación se completa
    const token = this.loginService.getIdToken(); //Obtengo el token de autenticación del servicio LoginService para incluirlo en la solicitud HTTP y autenticar la solicitud a la API REST, lo que permite eliminar un producto existente en la base de datos only if the user has logged in correctly
    const url_eliminar = `${this.url}datos/${llave}.json?auth=${token}`; //Construye la URL para acceder al producto específico a eliminar en la base de datos, utilizando la URL base concatenada con 'datos/' y la llave del producto, seguida de '.json' para indicar que se está trabajando con un recurso específico, y pasando el token de autenticación como parámetro de consulta para autenticar la solicitud
    return this.http.delete(url_eliminar); //Realiza una solicitud DELETE a la API REST para eliminar el producto existente en la base de datos, utilizando la URL construida para acceder al producto específico, lo que elimina el producto de la base de datos
  }

}
