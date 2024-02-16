import { Component, OnInit } from '@angular/core';
import { todoService } from '../../services/todo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor(private _todoService: todoService, private _uuidService : UuidService) { }
  addForm !: FormGroup
  
  ngOnInit(): void {
    this.addForm = new FormGroup({
      todoitem:new FormControl()
    })
  }
  onTodoAdd(){
    if(this.addForm.valid){
      console.log(this.addForm.value);
      let obj = {...this.addForm.value, id:this._uuidService.generateUUID()}
      console.log(obj);
      this._todoService.addTodo(obj)
      
    }
  }
}
