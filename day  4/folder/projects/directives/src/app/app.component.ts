import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
<label for="terms">Show terms and conditions</label>
  <input id="terms" type="checkbox" (change)="show=!show">
    <fieldset *ngIf="show">
      <legend>Terms and conditions</legend>
      <hr>
      <p>1st condition</p>
      <p>2nd condition</p>
      <p>3rd condition</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugit, praesentium voluptates accusantium ratione voluptatem placeat, et ipsam ad sit corporis totam est atque aut beatae laudantium fuga non aperiam.</p>
    </fieldset>

    <ng-template [ngIf]="show">{{title}}</ng-template>
  <hr>
  <ul>
    <li>{{avengers[0]}}</li>
  </ul>
  
  <ol>
    <li *ngFor="let hero of avengers">{{hero}}</li>
  </ol>
  
  `

  ,
  styles: []
})
export class AppComponent {
  title = 'directives';
  show = false;
  avengers = ["IromMan","SpiderMan","Hulk","Thor","Captain America"]
}
