import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
