import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) {}

  getRandomCat(): Observable<any> {
    // add your own api key from
    // https://thecatapi.com/
    const apiKey = '';
    return this.http.get<any>(`${this.apiUrl}?api_key=${apiKey}`);
  }
}
