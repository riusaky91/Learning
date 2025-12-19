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
}
