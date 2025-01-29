import { Injectable } from '@angular/core';
import { title } from 'process';
import { todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems:Array<todo> =[{
    title:'Groceries',
    id:0,
    userId:1,
    completed:false
  },
  {
    title:'Car Wash',
    id:1,
    userId:1,
    completed:false
  },
]
  constructor() { }
}
