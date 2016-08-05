import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'todo-app',
    template: `<h1> {{ title }} </h1>
        <ul> 
            <li *ngFor="#todo of todos">{{ todo }} </li>
            
        </ul>
    `
})

class AppComponent {
    title: string;
    todos: string[];

    constructor() {
        this.title = 'Todo';
        this.todos = [' Иузчить Ангуяр', 'Иузчить TypeScript', 'Изучить Node.js'];
    }
}

bootstrap (AppComponent);