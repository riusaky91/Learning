import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) //define el componente raíz y la configuración de la aplicación
  .catch((err) => console.error(err));
