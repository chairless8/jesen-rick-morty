import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;
  episodes: any[] = [];

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.characterService.getCharacterById(id).subscribe(character => {
          this.character = character;
          this.loadEpisodes(character?.episode);
        });
      }
    });
  }

  loadEpisodes(episodeUrls: string[]): void {
    episodeUrls.forEach(url => {
      this.characterService.getEpisodeByUrl(url).subscribe(episode => {
        this.episodes.push(episode);
      });
    });
  }
}
