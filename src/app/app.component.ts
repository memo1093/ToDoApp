import { Component } from '@angular/core';
import { Model } from "./model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "ToDoApp";
  model = new Model();

  getName(){
    return this.model.user;
  }
  getItems(){
    return this.model.items;
  }
  
}
