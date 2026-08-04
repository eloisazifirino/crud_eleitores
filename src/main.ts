import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Ponto de entrada da aplicação Angular.
// O bootstrapApplication cria o componente raiz (App) e aplica as
// configurações globais definidas em appConfig, sem usar AppModule.
bootstrapApplication(App, appConfig)
  // Se a inicialização falhar, o erro é exibido no console do navegador.
  .catch((err) => console.error(err));
