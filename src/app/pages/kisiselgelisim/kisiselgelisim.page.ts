import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@Component({
  selector: "app-kisiselgelisim",
  templateUrl: "./kisiselgelisim.page.html",
  styleUrls: ["./kisiselgelisim.page.scss"],
})
export class KisiselgelisimPage {
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
