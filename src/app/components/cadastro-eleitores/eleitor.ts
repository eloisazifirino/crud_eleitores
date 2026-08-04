// Modelo que descreve a estrutura de um eleitor dentro da aplicação.
// Cada objeto criado a partir desta classe será armazenado em listaEleitores.
export class Eleitor {
  // Identificador usado para distinguir e rastrear cada item na listagem.
  idEleitor?: number;

  // Número informado pelo usuário no formulário.
  numEleitor?: number;

  // Cidade vinculada ao eleitor cadastrado.
  cidade?: string;
}
