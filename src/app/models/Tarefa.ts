export default class Tarefa {
  titulo: string;
  descricao: string;
  dataEntrega: Date;
  concluida: boolean;

  constructor(titulo: string, descricao: string, dataEntrega: string, concluida: boolean = false) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataEntrega = new Date(dataEntrega);
    this.concluida = concluida;
  }
}
