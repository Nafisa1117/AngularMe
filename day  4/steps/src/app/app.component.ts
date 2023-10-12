import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div>
    <h1>Main component</h1>
    <app-child [quantity]="count" (childEvent)="childEventHandler($event)">
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <button>Click Me</button>
    <p>Hello this a paragrah</p>
    <div>{{title}}</div>
    </app-child>
    </div>
    <button (click)="count=count+1">increase the count:{{count}}</button>


  `
})
export class AppComponent {
  title = 'My application title'
  count:number =0

  childEventHandler(message:any){
    alert(message);
  }
}
