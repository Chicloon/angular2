import { Component } from '@angular/core';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Todo } from './components/shared/todo.model';

@Component({
    selector: 'todo-app',
    templateUrl:  './app/app.component.html',
    styleUrls:['./app/app.component.css'],
    directives: [TodoListComponent, TodoFormComponent]
})

export class AppComponent {
    title: string;
    todos: Todo[];
    
    constructor() {
        this.title = 'Todo';
        this.todos = [];
    }

    onTodoAdded(todo: Todo) {
        this.todos.push(todo);
    }
}