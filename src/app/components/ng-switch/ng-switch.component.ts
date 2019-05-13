import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-ng-switch",
  templateUrl: "./ng-switch.component.html",
  styles: []
})
export class NgSwitchComponent implements OnInit {
  form = new FormGroup({
    alert: new FormControl("info")
  });

  constructor() {}

  ngOnInit() {}
}
