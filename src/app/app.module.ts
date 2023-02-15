import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ActionItem} from "./actionitem/actionitem.component";

@NgModule({
    declarations: [
        AppComponent,
        ActionItem
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
