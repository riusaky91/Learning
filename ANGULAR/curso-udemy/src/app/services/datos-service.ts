import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModule } from '../producto/producto-module';
import { LoginService } from './login-service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = "https://tienda-online-e7b91-default-rtdb.firebaseio.com/";

  constructor(private httpClient: HttpClient,
     private loginService: LoginService
  ) { }

  listarProductos(): Observable<{[llave: string]: ProductoModule}> { // Método para listar productos devuelve un observable de un objeto con llaves y valores de tipo ProductoModule
    const token = this.loginService.getIdToken(); // Obtiene el token de autenticación del servicio de login
    const url_listar = this.url + "datos.json?auth=" + token; // Construye la URL para listar productos con el token de autenticación
    return this.httpClient.get<{[llave: string]: ProductoModule}>(url_listar); // Retorna un observable con la lista de productos desde la URL con el token de autenticación
  }

  guardarProducto(producto: ProductoModule): Observable<any> { // Método para guardar un producto, recibe un producto y devuelve un observable
    const token = this.loginService.getIdToken(); // Obtiene el token de autenticación del servicio de login
    const url_guardar = this.url + "datos.json?auth=" + token; // Construye la URL para guardar el producto con el token de autenticación
    return this.httpClient.post(url_guardar, producto); // Retorna un observable al guardar el producto
  }

  modificarProducto(producto: ProductoModule, llave: string): Observable<any> { // Método para modificar un producto
    // Lógica para modificar un producto
    const token = this.loginService.getIdToken(); // Obtiene el token de autenticación del servicio de login
    const url_modificar = this.url + "datos/" + llave + ".json?auth=" + token; // Construye la URL para modificar el producto con el token de autenticación
    return this.httpClient.put(url_modificar, producto); // Retorna un observable al modificar el producto
  }

  eliminarProducto(llave: string): Observable<any> { // Método para eliminar un producto por su llave
    const token = this.loginService.getIdToken(); // Obtiene el token de autenticación del servicio de login
    const url_eliminar = this.url + "datos/" + llave + ".json?auth=" + token; //  Construye la URL para eliminar el producto con el token de autenticación
    return this.httpClient.delete(url_eliminar); // Retorna un observable al eliminar el producto
  }
}
