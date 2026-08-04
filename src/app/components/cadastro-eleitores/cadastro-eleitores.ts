import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Eleitor } from './eleitor';

// Componente responsável por controlar o formulário e a lista de eleitores.
@Component({
  // Tag utilizada no template do componente raiz (app.html).
  selector: 'app-cadastro-eleitores',
  // Indica que o componente funciona sem precisar ser declarado em um NgModule.
  standalone: true,
  // FormsModule disponibiliza o ngModel usado nos campos do formulário.
  imports: [FormsModule],
  // Arquivos que definem a estrutura visual e os estilos do componente.
  templateUrl: './cadastro-eleitores.html',
  styleUrl: './cadastro-eleitores.css',
})
export class CadastroEleitores {
  // Valores ligados aos inputs por [(ngModel)]. Quando o usuário digita,
  // estas propriedades são atualizadas automaticamente pelo Angular.
  idEleitor: number = 0;
  numEleitor: number = 0;
  cidade: string = '';

  // Armazena os eleitores apenas na memória do navegador. Ao recarregar a
  // página, a lista volta a ficar vazia porque ainda não existe banco de dados.
  listaEleitores: Eleitor[] = [];

  // Executado pelo botão "Adicionar" do template.
  addEleitor() {
    // Exibe os valores no console para auxiliar durante o desenvolvimento.
    console.log(this.numEleitor, '<-> ', this.cidade);

    // Cria uma nova instância do modelo Eleitor para não guardar no array
    // uma referência direta às propriedades utilizadas pelo formulário.
    const item = new Eleitor();

    // Gera um identificador sequencial com base na quantidade atual de itens.
    item.idEleitor = this.listaEleitores.length + 1;
    // Copia para o novo objeto os valores digitados pelo usuário.
    item.numEleitor = this.numEleitor;
    item.cidade = this.cidade;

    // Adiciona o eleitor ao final do array. A alteração faz o @for do template
    // renderizar automaticamente um novo item na tela.
    this.listaEleitores.push(item);

    // Limpa os campos depois do cadastro. Como existe ligação bidirecional
    // com ngModel, os inputs também são atualizados imediatamente.
    this.numEleitor = 0;
    this.cidade = '';
  }

  // Executado pelo botão "Limpar". Remove todos os itens e também restaura
  // os valores iniciais do formulário.
  limparTudo() {
    this.listaEleitores = [];
    this.numEleitor = 0;
    this.cidade = '';
  }
}
