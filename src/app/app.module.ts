import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { VaccinesService } from './ng-material/mat-basic-vaccines/mat-basic.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [VaccinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
