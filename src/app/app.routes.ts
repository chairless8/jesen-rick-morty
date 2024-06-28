import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { HomeComponent } from './pages/home/home.component'; // Importa el nuevo componente

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Nueva ruta para la página de inicio
  { path: 'characters', component: CharacterListComponent }, // Actualiza la ruta de la lista de personajes
  { path: 'character/:id', component: CharacterDetailComponent }
];
