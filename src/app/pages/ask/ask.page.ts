import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-ask",
  templateUrl: "./ask.page.html",
  styleUrls: ["./ask.page.scss"],
})
export class AskPage {
  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  openEnd() {
    this.menu.open("end");
  }

  openCustom() {
    this.menu.enable(true, "custom");
    this.menu.open("custom");
  }
}
