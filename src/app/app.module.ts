import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from "app/service/drop-down.service";
import { CapitalPipe } from './capital.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    RootComponent,
    CapitalPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DropDownService],
  bootstrap: [RootComponent]
})
export class AppModule { }
