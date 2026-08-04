import { Component } from '@angular/core';
import { CadastroEleitores } from './components/cadastro-eleitores/cadastro-eleitores';

@Component({
  selector: 'app-root',
  imports: [CadastroEleitores],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
