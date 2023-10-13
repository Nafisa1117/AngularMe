import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div >
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>

    <h2>*ngFor directive</h2>

    <div>
      <div *ngFor="let hero of avengers; index as idx; first as fst; last as lst">
        {{idx+1}} =
        <span *ngIf="fst">First Avenger</span>
        <span *ngIf="lst">Last Avenger</span>
        <span *ngIf="!fst && !lst">Inbethween avengers</span>
       = {{hero}}

      </div>
    </div>

    <ng-template ngFor let-hero [ngForOf]="avengers">
      {{hero}}
    </ng-template>

      <hr>

    <h2>*gnSwitch directive</h2>
    <input #rng type="range" min=0 max=5 [value]="rating"  (input)="rating=rng.value"/>{{rating}}
    <div [ngSwitch]="rating">
      <h3 *ngSwitchCase="1" class="rating">*</h3>
      <h3 *ngSwitchCase="2" class="rating">**</h3>
      <h3 *ngSwitchCase="3" class="rating">***</h3>
      <h3 *ngSwitchCase="4" class="rating">****</h3>
      <h3 *ngSwitchCase="5" class="rating">*****</h3>
       <h3 *ngSwitchDefault="default" class="rating">Not rated</h3>
    </div>
<hr>
    <h2>ngNonBindable directive</h2>
    <h3>{{'hello masai'}}</h3>

    <hr>
 <h2>ngStyle directive</h2>
 <div [style]="styleprop">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magni laudantium atque consequuntur esse quidem quisquam repellat omnis totam itaque facilis consequatur nostrum ea saepe quia sed accusamus perferendis expedita!
</div>

<div [style.backgroundColor]="bgcol1">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magni laudantium atque consequuntur esse quidem quisquam repellat omnis totam itaque facilis consequatur nostrum ea saepe quia sed accusamus perferendis expedita!
</div>

<div [ngStyle]="{'background-color':bgcol2,'color':'darkblue'}">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magni laudantium atque consequuntur esse quidem quisquam repellat omnis totam itaque facilis consequatur nostrum ea saepe quia sed accusamus perferendis expedita!
</div>

<div [ngStyle]="{'background-color':rating < 3 ? bgcol1 :bgcol2}">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magni laudantium atque consequuntur esse quidem quisquam repellat omnis totam itaque facilis consequatur nostrum ea saepe quia sed accusamus perferendis expedita!
</div>

<hr>
<h2>ngClass directive</h2>
<div [ngClass]="{redbox : rating>2, bluebox:rating>4}">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magni laudantium atque consequuntur esse quidem quisquam repellat omnis totam itaque facilis consequatur nostrum ea saepe quia sed accusamus perferendis expedita!
</div>
  `,
  styles: [`
      .rating{
        margin : 0px;

        font-family: arial;
        color: goldenrod;
      }
      .redbox{
        width : 300px;

        background-color:red;
        text-align : justify;
        padding: 10px;
        margin:10px
      }
      .bluebox{
        width : 300px;

        background-color:blue;
        text-align : justify;
        padding: 10px;
        margin:10px
      }
  `]
})
export class AppComponent {
  title = 'step1-directives';
  styleprop = "border:1px solid darkslategrey; width:400px; background-color:silver; padding:10px; margin:auto; font-family:arial; text-align:justify";
  bgcol1 = "yellow";
  bgcol2 = "pink";
  avengers = ["A","Bb","cd","Eff"];
  rating:any = 1;
}
