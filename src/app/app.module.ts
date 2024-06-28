import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { CharacterListComponent } from './components/character-list/character-list.component';
import { HeaderComponent } from './components/header/header.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    CharacterListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
