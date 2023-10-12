import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  // inputs : ["quantity"],
  template:`
        <div>
        <h2>Child component</h2>
        <ng-content></ng-content>
        <h4>Quantity : {{quantity*2}}</h4>

        <button (click)="clickHandler()">Click Me</button>
        </div>



  `
})
export class ChildComponent {
  title = 'child component';
  @Input() quantity:number =0;
  @Output() childEvent:EventEmitter<any>= new EventEmitter();

  clickHandler(){
    //alert("you click the button");
    this.childEvent.emit(this.title);
  }
}
