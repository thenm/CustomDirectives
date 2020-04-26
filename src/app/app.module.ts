import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DClassDirective } from './d-class.directive';
import { AppForDirective } from './app-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    DClassDirective,
    AppForDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
