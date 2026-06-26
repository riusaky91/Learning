import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { ClienteModel } from '../modelo/clienteModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cliente {
  clientes: Observable<ClienteModel[]>; 
  
  constructor(private firestore: Firestore) { // Realiza la consulta directamente usando la API modular 
    const clientesRef = collection(this.firestore, 'clientes');  // Referencia a la colección 'clientes' en Firestore
    const consulta = query(clientesRef, orderBy('nombre', 'asc')); // Consulta ordenada por el campo 'nombre' en orden ascendente
    this.clientes = collectionData(consulta, { idField: 'id' }) as Observable<ClienteModel[]>; // Convierte el resultado de la consulta en un Observable de ClienteModel[], incluyendo el campo 'id'
  } 
  
  getClientes(): Observable<ClienteModel[]> { // Método para obtener el Observable de clientes
    return this.clientes; 
  } 
}

