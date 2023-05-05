import { Component } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  titulo: string = "Titulo Inicial";

  // registraTitulo(event: Event) {
  //   const target: HTMLInputElement = event.target as HTMLInputElement;
  //   this.titulo = target.value;
  //   console.log("Este é o valor do título agora:", this.titulo);
  // }

  formSubmit() {
    console.log("Este é o valor do título agora:", this.titulo);
  }
}
