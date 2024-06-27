import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from
 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http:
 HttpClient) {}

  getCharacters(page: number, name: string = ''): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?page=${page}&name=${name}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
