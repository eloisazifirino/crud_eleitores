import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Eleitor } from './eleitor';

@Component({
  selector: 'app-cadastro-eleitores',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-eleitores.html',
  styleUrl: './cadastro-eleitores.css',
})
export class CadastroEleitores {
  idEleitor : number = 0
  numEleitor : number = 0
  cidade : string = ''
  listaEleitores : Eleitor[] = []

addEleitor(){
    console.log(this.numEleitor, '<-> ', 
    this.cidade)
    //INSTACIANDO A CLASSE ELEITOR    
    let item = new Eleitor ()
    item.idEleitor = this.listaEleitores.length + 1
    item.numEleitor = this.numEleitor
    item.cidade = this.cidade

    this.listaEleitores.push(item)

    this.numEleitor = 0
    this.cidade = ''
  }
  
    limparTudo(){
      this.listaEleitores = []
      this.numEleitor = 0
      this.cidade = ''
    }

}
