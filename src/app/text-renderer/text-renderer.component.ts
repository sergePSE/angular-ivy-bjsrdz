import { Component, OnInit } from "@angular/core";
import { AgRendererComponent } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: "app-text-renderer",
  templateUrl: "./text-renderer.component.html",
  styleUrls: ["./text-renderer.component.css"]
})
export class TextRendererComponent implements AgRendererComponent {
  value: string;
  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }
}
