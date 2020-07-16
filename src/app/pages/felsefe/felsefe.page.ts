import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-felsefe",
  templateUrl: "./felsefe.page.html",
  styleUrls: ["./felsefe.page.scss"],
})
export class FelsefePage {
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
