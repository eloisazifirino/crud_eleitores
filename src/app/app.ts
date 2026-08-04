import { Component } from '@angular/core';
import { CadastroEleitores } from './components/cadastro-eleitores/cadastro-eleitores';

// Componente raiz: é o primeiro componente exibido quando a aplicação inicia.
@Component({
  // Nome da tag usada pelo Angular no arquivo index.html.
  selector: 'app-root',
  // Como a aplicação usa componentes standalone, todo componente utilizado
  // no template precisa ser registrado diretamente no array imports.
  imports: [CadastroEleitores],
  // Estrutura HTML e estilos exclusivos deste componente.
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// A classe não precisa de propriedades porque toda a lógica está concentrada
// no componente CadastroEleitores.
export class App {}
