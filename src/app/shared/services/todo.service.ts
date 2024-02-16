import { Injectable, OnInit } from "@angular/core";
import { TodoInterface } from "../model/todo.interface";
import { todoArr } from "../const/todo";

@Injectable({
    providedIn: `root`
})
export class todoService implements OnInit{
  toDosArr : Array<TodoInterface> = todoArr
    constructor() {}

ngOnInit(): void {
      
}

fetchData(){
    return this.toDosArr 
}
  addTodo(obj:TodoInterface){
    this.toDosArr.push(obj)
  }
  onRemove(id:string){
   console.log(id);
   let getConfirm = confirm(`Are u sure u want to delete!!!!!`)
   if(getConfirm){
    let getIndex = todoArr.findIndex(todo => todo.id === id)
    console.log(getIndex);
    this.toDosArr.splice(getIndex,1)
   }
  }
}