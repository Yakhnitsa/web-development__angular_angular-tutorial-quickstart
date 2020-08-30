import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  public todos: TodoItem[] = []

  fetchTodos(): Observable<TodoItem[]>{
    return this.httpClient.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .pipe(tap(todos => this.todos = todos))
  }
  checkTodo(id: number){
    const item = this.todos.find(t => t.id === id)
    item.completed = !item.completed
  }
  removeTodo(id: number){
    const index = this.todos.findIndex(t => t.id === id);
    this.todos.splice(index,1)

  }
  addTodo(title: string, date: string){
    const maxValue = Math.max.apply(null, this.todos.map(todo => todo.id));
    const todoDate = date == ''? new Date : new Date(date);
    const newTodo: TodoItem = {userId: 10, id:maxValue +1, date: todoDate,title: title, completed: false}
    console.log(newTodo)
    this.todos.push(newTodo)
  }
}


export interface TodoItem {
  userId: number
  id: number
  title: string
  completed: boolean
  date?: any
}
