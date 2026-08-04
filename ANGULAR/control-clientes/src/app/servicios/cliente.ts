import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, DocumentData, orderBy, query, Query, updateDoc } from 'firebase/firestore';
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

  getClientePorId(id: string): Observable<ClienteModel | undefined> { // Método para obtener un cliente específico por su ID
    const clienteDocRef = doc(this.firestore, 'clientes', id); // Crea una referencia al documento del cliente con el ID proporcionado
    return docData<ClienteModel>(clienteDocRef, { idField: 'id' }) as Observable<ClienteModel | undefined>; // Obtiene los datos del documento como un Observable, incluyendo el campo 'id' en el resultado
  }

  modificarCliente(id: string, cliente: ClienteModel) { // Método para modificar un cliente existente en Firestore
    const clienteDocRef = doc(this.firestore, 'clientes', id); // Crea una referencia al documento del cliente con el ID proporcionado
    return updateDoc(clienteDocRef, {...cliente}); // Utiliza la función updateDoc para actualizar los datos del documento con los nuevos valores proporcionados en el objeto cliente
  }

  eliminarCliente(cliente: ClienteModel) { // Método para eliminar un cliente existente en Firestore
    const clienteDocRef = doc(this.firestore, 'clientes', cliente.id!); // Crea una referencia al documento del cliente con el ID proporcionado
    return deleteDoc(clienteDocRef); // Utiliza la función deleteDoc para eliminar el documento del cliente
  }
}

