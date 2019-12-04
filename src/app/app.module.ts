// file: app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // 1

import { AppComponent } from './app.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveForm2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }