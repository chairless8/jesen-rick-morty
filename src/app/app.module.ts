import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { CharacterListComponent } from './components/character-list/character-list.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    CharacterListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
