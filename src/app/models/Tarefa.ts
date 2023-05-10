export default class Tarefa {
  static lastId: number = 1;
  id: number;
  titulo: string;
  descricao: string;
  dataEntrega: Date;
  concluida: boolean;

  constructor(titulo: string, descricao: string, dataEntrega: string, concluida: boolean = false) {
    this.id = Tarefa.lastId;
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataEntrega = new Date(dataEntrega);
    this.concluida = concluida;
  }
}
