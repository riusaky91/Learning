import { Injectable } from '@angular/core';
import { getFirestore } from '@firebase/firestore';
import { Firestore } from '@firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth/web-extension';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {

  apiKey: "AIzaSyAWXONR1N4sW_wn3MGl6IU2kdg9yFrK2oQ",

  authDomain: "tienda-online-e7b91.firebaseapp.com",

  databaseURL: "https://tienda-online-e7b91-default-rtdb.firebaseio.com",

  projectId: "tienda-online-e7b91",

  storageBucket: "tienda-online-e7b91.firebasestorage.app",

  messagingSenderId: "680928293212",

  appId: "1:680928293212:web:4247f5197feba9d51a9199"

};

public auth: Auth;
public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app)
  }

}
