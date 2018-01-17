import { Component } from '@angular/core';
import {Buttons} from './buttons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  buttons:Array<object>;

  constructor(){
    this.title="SwitchBoard";
    this.buttons=[];
    for(let i=0;i<10;i++){
      this.buttons.push(new Buttons(true,i));
    }
  }
  onClick(index){ 
    if (this.buttons[index].value=="ON"){
      this.buttons[index].value="OFF"
    }else{
      this.buttons[index].value="ON";
    }
  }
}
