import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, DocumentData, orderBy, query, Query } from 'firebase/firestore';
import { ClienteModel } from '../modelo/clienteModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cliente {
  private clientesRef: any; // Referencia a la colección 'clientes' en Firestore, utilizada para realizar consultas y operaciones sobre los documentos de clientes
  clientes: Observable<ClienteModel[]>; // Observable que emitirá la lista de clientes obtenida de Firestore
  

  constructor(private firestore: Firestore) { // Realiza la consulta directamente usando la API modular 
    this.clientesRef = collection(this.firestore, 'clientes');  // Referencia a la colección 'clientes' en Firestore
    const consulta = query(this.clientesRef, orderBy('saldo', 'desc')) as Query<ClienteModel, DocumentData>; // Crea una consulta para obtener los documentos de la colección 'clientes' ordenados por el campo 'nombre' en orden ascendente
    this.clientes = collectionData<ClienteModel, 'id'>(consulta, { idField: 'id' }) as Observable<ClienteModel[]>; // Obtiene los datos de la consulta como un Observable, incluyendo el campo 'id' de cada documento en el resultado
  } 
  
  getClientes(): Observable<ClienteModel[]> { // Método para obtener el Observable de clientes
    return this.clientes; // Retorna el Observable que emitirá la lista de clientes obtenida de Firestore
  } 

  agregarCliente(cliente: ClienteModel) { // Método para agregar un nuevo cliente a Firestore
    return addDoc(this.clientesRef, cliente); // Utiliza la función addDoc para agregar un nuevo documento a la colección 'clientes' con los datos del cliente proporcionado
  }
}

