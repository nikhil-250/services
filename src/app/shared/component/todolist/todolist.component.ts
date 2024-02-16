import { Component, OnInit } from '@angular/core';
import { todoService } from '../../services/todo.service';
import { TodoInterface } from '../../model/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(private _todotodo : todoService) { }
   todolist !: Array<TodoInterface>
  ngOnInit(): void {
    this.todolist = this._todotodo.fetchData()
  }

  onDelete(id:string){
      this._todotodo.onRemove(id)
  }
}
