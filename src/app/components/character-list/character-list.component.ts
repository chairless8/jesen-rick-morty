import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule, FormsModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  page: number = 1;
  searchName: string = '';

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    console.log('init')
     this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters(this.page, this.searchName).subscribe(data => {
      this.characters = data.results;
      console.log(this.characters)
    });
  }

  onScroll(): void {
    this.page++;
    this.characterService.getCharacters(this.page, this.searchName).subscribe(data => {
      this.characters = [...this.characters, ...data.results];
    });
  }

  search(): void {
    this.page = 1;
    this.characters = [];
    this.getCharacters();
  }

  goToCharacterDetail(id: number): void {
    this.router.navigate(['/character', id]);
  }
}
