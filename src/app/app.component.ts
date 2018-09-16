// core module
import { Component, OnInit } from "@angular/core";

import * as jspdf from "jspdf";
import html2canvas from "html2canvas";

// for adding functionalities to forms
import { NgForm } from "@angular/forms";

// item frame definition import
import { Item } from "./model/item";

// anootation for angular
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  count: number; // count of invoices
  editing: boolean; // is user in process of adding new invoice
  items: Item[] = [];
  grandTotal: number; // total cost of all invoices

  ngOnInit() {
    // init function called to initialize variables
    this.count = 0;
    this.grandTotal = 0;
    this.editing = false;
  }

  addItem($event) {
    // for FAB button handling
    this.count += 1;
    this.editing = true;
    this.items.push({ id: this.count, name: "null", quantity: -1, rate: -1 });
  }

  onSubmit(f: NgForm) {
    // accept key of form
    console.log(f.value);
    console.log(f.valid);
    if (f.valid) {
      this.items[this.count - 1] = {
        id: this.count - 1,
        name: f.value.name,
        quantity: f.value.quantity,
        rate: f.value.rate
      };
      this.grandTotal += f.value.quantity * f.value.rate;
    }
    f.reset();
    this.editing = false;
  }

  revert() {
    // reject key of form
    this.items.splice(this.count - 1, 1);
    this.count -= 1;
    this.editing = false;
  }

  public captureScreen() {
    var data = document.getElementById("print");
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4",true); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });
  }
}
