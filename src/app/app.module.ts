import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { FormsModule } from "@angular/forms";
import { TextEditorComponent } from "./text-editor/text-editor.component";
import { TextRendererComponent } from "./text-renderer/text-renderer.component";

@NgModule({
  declarations: [AppComponent, TextEditorComponent, TextRendererComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([TextRendererComponent, TextEditorComponent]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
