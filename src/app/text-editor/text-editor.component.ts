import { Component, OnInit } from "@angular/core";
import { AgEditorComponent } from "ag-grid-angular";
import { ICellEditorParams } from "ag-grid-community";

@Component({
  selector: "app-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.css"]
})
export class TextEditorComponent implements AgEditorComponent {
  value: string;
  constructor() {}

  agInit(params: ICellEditorParams): void {
    this.value = params.value;
  }

  getValue(): any {
    return this.value;
  }

  focusIn(): void {
    console.log("focus in");
  }

  focusOut(): void {
    console.log("focus out");
  }
}
