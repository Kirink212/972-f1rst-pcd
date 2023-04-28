import { Component } from '@angular/core';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  // Array<Tarefa>
  arrayTarefas: Tarefa[] = [
    new Tarefa("Passear com o cachorro", "Amo passear com meu cachorro", "2023-04-25"),
    new Tarefa("Passear com o chimpanzé", "Amo passear com meu chimpanzé", "2023-04-26"),
    new Tarefa("Passear com o jacaré", "Amo passear com meu jacaré", "2023-04-23", true),
    new Tarefa("Passear com o cavalo", "Amo passear com meu cavalo", "2023-04-28")
  ];
}
