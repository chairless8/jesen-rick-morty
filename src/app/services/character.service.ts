import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCharacters(page: number, name: string = ''): Observable<any> {
    const url = `${this.apiUrl}/character?page=${page}&name=${name}`;
    return this.http.get<any>(url);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

  getEpisodeByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
}
