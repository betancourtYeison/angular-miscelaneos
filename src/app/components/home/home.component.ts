import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-ng-style></app-ng-style>
    <hr />
    <app-css></app-css>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
      dolorem repellat doloribus natus. Debitis magnam quasi ad. Fugit
      praesentium quia rerum dolorem adipisci autem voluptates harum, molestias
      consectetur corrupti facere!
    </p>
    <hr />
    <app-ng-class></app-ng-class>
    <hr />
    <p appHighlight="#f8d7da">
      Directive
    </p>
    <hr />
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {
    console.log("constructor");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges() {
    console.log("OnChanges");
  }
  ngDoCheck() {
    console.log("DoCheck");
  }
  ngAfterContentInit() {
    console.log("AfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("AfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }
  ngOnDestroy() {
    console.log("OnDestroy");
  }
}
