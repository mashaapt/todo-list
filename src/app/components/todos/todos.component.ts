import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {

      if (i == id) {
        v.completed = !v.completed;
      }

      return v;

    })
  }

  deleteTodo (id: number) {
   this.todos = this.todos.filter((v, i) => i !== id); 
  }
}
