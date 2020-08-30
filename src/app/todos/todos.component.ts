import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {TodoItem, TodoService} from "../service/todo.service";
import {delay} from "rxjs/operators";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  loading: boolean = true
  searchString: string = ''

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.fetchTodos()
      .pipe(delay(1000))
      .subscribe(() =>{
      this.loading = false
    })
  }
  onChange(id: number){
    this.todoService.checkTodo(id)
  }
  remove(id: number){
    this.todoService.removeTodo(id)
  }


}


