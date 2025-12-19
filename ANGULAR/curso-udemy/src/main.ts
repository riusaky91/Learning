import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {...appConfig, providers: [ // Configura los proveedores de la aplicación
    provideHttpClient(), // Agrega el proveedor de HttpClient
    ...appConfig.providers // Agrega provideHttpClient() aquí
  ]}) //define el componente raíz y la configuración de la aplicación
  .catch((err) => console.error(err));
