// file: app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // 1

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
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