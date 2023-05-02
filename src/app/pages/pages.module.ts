import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskCreateComponent } from './task-create/task-create.component';

@NgModule({
  declarations: [
    TasksListComponent,
    PageNotFoundComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TasksListComponent
  ]
})
export class PagesModule { }
