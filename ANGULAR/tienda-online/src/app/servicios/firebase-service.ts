import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {


  firebaseConfig = { //Configuración de Firebase para conectar la aplicación Angular con los servicios de Firebase, incluyendo la autenticación y la base de datos, utilizando las credenciales proporcionadas por Firebase para el proyecto específico de la tienda online

    apiKey: "AIzaSyAEhuK4WuQHj5sscRNrbKtyn8B_ii6bDV0",

    authDomain: "tienda-online-baeb5.firebaseapp.com",

    databaseURL: "https://tienda-online-baeb5-default-rtdb.firebaseio.com",

    projectId: "tienda-online-baeb5",

    storageBucket: "tienda-online-baeb5.firebasestorage.app",

    messagingSenderId: "881922121462",

    appId: "1:881922121462:web:83664e17d06890d3eb96d7"

  };

  public auth: Auth; // Variable para la autenticación de Firebase, que se utilizará para manejar el inicio de sesión y la gestión de usuarios en la aplicación Angular utilizando los servicios de autenticación de Firebase
  public firebase: Firestore; // Variable para la base de datos de Firebase, que se utilizará para manejar el almacenamiento y la gestión de datos en la aplicación Angular utilizando los servicios de base de datos de Firebase

  constructor(){
    const app = initializeApp(this.firebaseConfig);// Inicializo la aplicación de Firebase utilizando la configuración proporcionada, lo que permite conectar la aplicación Angular con los servicios de Firebase para autenticación y base de datos
    this.auth = getAuth(app); // Inicializo la variable de autenticación utilizando el método getAuth de Firebase, pasando la instancia de la aplicación de Firebase, lo que permite manejar el inicio de sesión y la gestión de usuarios en la aplicación Angular utilizando los servicios de autenticación de Firebase
    this.firebase = getFirestore(app); // Inicializo la variable de base de datos utilizando el método getFirestore de Firebase, pasando la instancia de la aplicación de Firebase, lo que permite manejar el almacenamiento y la gestión de datos en la aplicación Angular utilizando los servicios de base de datos de Firebase
  }

}
