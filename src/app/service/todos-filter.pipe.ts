import { Pipe, PipeTransform } from '@angular/core';
import {TodoItem} from "./todo.service";

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: TodoItem[], search: string = ''): TodoItem[] {
    if(!search.trim()){
      return todos
    }
    return todos.filter( todo =>{
      return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
