import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.API_KEY;

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=ie&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
  getTopSportsHeadlines(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
  getTopBusinessHeadlines(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=ie&category=business&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
