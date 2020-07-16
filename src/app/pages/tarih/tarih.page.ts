import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
@Component({
  selector: "app-tarih",
  templateUrl: "./tarih.page.html",
  styleUrls: ["./tarih.page.scss"],
})
export class TarihPage {
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
