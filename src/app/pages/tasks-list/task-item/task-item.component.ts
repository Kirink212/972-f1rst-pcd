import { Component, Input } from '@angular/core';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  //// No lugar de uma tarefa indefinida, cria-se uma nova tarefa com valores padrão (default)
  // @Input('t') tarefa: Tarefa = new Tarefa("Tarefa 1", "Descrição 1", "2023-10-06");

  //// Simplemente definindo uma tarefa como indefinida
  @Input('t') tarefa?: Tarefa;
}
