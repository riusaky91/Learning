import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModule } from '../producto/producto-module';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = "https://tienda-online-e7b91-default-rtdb.firebaseio.com/";

  constructor(private httpClient: HttpClient) { }

  listarProductos(): Observable<{[llave: string]: ProductoModule}> { // Método para listar productos devuelve un observable de un objeto con llaves y valores de tipo ProductoModule
    return this.httpClient.get<{[llave: string]: ProductoModule}>(this.url + "datos.json"); // Retorna un observable con la lista de productos
  }

  guardarProducto(producto: ProductoModule): Observable<any> { // Método para guardar un producto, recibe un producto y devuelve un observable
    return this.httpClient.post(`${this.url}datos.json`, producto); // Retorna un observable al guardar el producto
  }

  modificarProducto(producto: ProductoModule, llave: string): Observable<any> { // Método para modificar un producto
    // Lógica para modificar un producto
    return this.httpClient.put(`${this.url}datos/${llave}.json`, producto); // Retorna un observable al modificar el producto
  }

  eliminarProducto(llave: string): Observable<any> { // Método para eliminar un producto por su llave
    return this.httpClient.delete(`${this.url}datos/${llave}.json`); // Retorna un observable al eliminar el producto
  }
}
