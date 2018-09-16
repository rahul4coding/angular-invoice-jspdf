// app external dependecies and meeting point of all modules
// here all the modules, directives are imported and defined

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule, MatTextareaAutosize} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    MatTextareaAutosize
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
