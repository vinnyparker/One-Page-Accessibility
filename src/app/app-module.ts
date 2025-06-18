import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app'; // <-- CORRIGIDO AQUI

@NgModule({
declarations: [
//AppComponent // <-- CORRIGIDO AQUI
  ],
imports: [
BrowserModule,
AppRoutingModule,
AppComponent
],
providers: [
provideBrowserGlobalErrorListeners()
],
bootstrap: [AppComponent] // <-- CORRIGIDO AQUI
})
export class AppModule { }
