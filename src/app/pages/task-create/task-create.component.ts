import Tarefa from 'src/app/models/Tarefa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  novaTarefa: Tarefa = new Tarefa("Titulo Inicial", "Descrição Inicial", "2023-10-12")
  // titulo: string = "Titulo Inicial";
  // descricao: string = "Descrição Inicial";
  // dataEntrega: string = "2023-10-12";

  // registraTitulo(event: Event) {
  //   const target: HTMLInputElement = event.target as HTMLInputElement;
  //   this.titulo = target.value;
  //   console.log("Este é o valor do título agora:", this.titulo);
  // }

  formSubmit() {
    const arrayTarefas = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
    arrayTarefas.push(this.novaTarefa)
    localStorage.setItem("arrayTarefas", JSON.stringify(arrayTarefas));
    console.log("Este é o valor da nova tarefa agora:", this.novaTarefa);
  }
}
