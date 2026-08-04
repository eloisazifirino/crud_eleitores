import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Configurações e serviços disponíveis para toda a aplicação.
export const appConfig: ApplicationConfig = {
  providers: [
    // Encaminha erros globais do navegador para o tratamento de erros do Angular.
    provideBrowserGlobalErrorListeners(),
    // Ativa o sistema de rotas usando a lista declarada em app.routes.ts.
    provideRouter(routes)
  ]
};
