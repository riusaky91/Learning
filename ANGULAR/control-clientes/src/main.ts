import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment.development';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { APP_INITIALIZER, isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(App, {
  ...appConfig, // Desestructuramos el appConfig para pasar sus propiedades al bootstrap
  providers: [ 
    provideHttpClient(), 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // Inicializa Firebase 

    // Configuración moderna de Firestore con Persistencia Offline
    provideFirestore(() => {
      const app = initializeApp(environment.firebaseConfig);
      return initializeFirestore(app, {
        localCache: persistentLocalCache({
          tabManager: persistentMultipleTabManager() // Permite sincronizar si el usuario abre varias pestañas
        })
      });
    }), 
    provideAuth(() => getAuth()), // Inicializa Auth 
    provideStorage(() => getStorage()), // Inicializa Storage 
    
    ...appConfig.providers, 
    
    provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }) // Desestructuramos los providers del appConfig si es necesario
  ]

})
  .catch((err) => console.error(err));


