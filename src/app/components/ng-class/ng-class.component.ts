import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-class",
  templateUrl: "./ng-class.component.html"
})
export class NgClassComponent implements OnInit {
  alertClass: string = "alert-danger";
  propertiesClass: Object = {
    danger: false
  };
  loadingClass: boolean = false;
  constructor() {}

  ngOnInit() {}

  process() {
    this.loadingClass = true;
    setTimeout(() => {
      this.loadingClass = false;
    }, 2000);
  }
}
