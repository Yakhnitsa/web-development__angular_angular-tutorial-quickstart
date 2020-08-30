import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string = ''
  date: string = ''

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(){
    this.todoService.addTodo(this.title,this.date)
    this.title = ''
    this.date = ''
  }

}
