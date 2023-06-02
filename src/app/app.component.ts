import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display : string = '';
  result : any ;

  click(event :any){
    this.display += event
  }

  equal(){
    this.result =  eval(this.display)
    if(Number.isInteger(this.result)){
      this.display = this.result
    }else {
      this.display = this.result.toFixed(2)
    }
  }

  clear(){
    this.display = ''
  }

  erase(){
    this.display = this.display.replace(this.display[this.display.length-1]  , "")
  }



  title = 'Calculator';
}

