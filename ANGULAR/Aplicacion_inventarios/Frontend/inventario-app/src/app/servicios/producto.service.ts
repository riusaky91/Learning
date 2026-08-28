import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoServicio {
  private urlBase = 'http://localhost:8080/api/inventario-app'; // URL base del backend

  constructor(private clienteHttp: HttpClient) { } // Inyección de dependencia del cliente HTTP

  obtenerProductosLista(): Observable<Producto[]> { // Endpoint para obtener la lista de productos
    return this.clienteHttp.get<Producto[]>(`${this.urlBase}/productos`); // retorna un observable que emite la lista de productos obtenida del backend
  }
}
