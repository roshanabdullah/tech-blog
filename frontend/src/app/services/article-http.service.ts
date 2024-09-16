// src/app/services/article.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Article {
  id: number;
  title: string;
  content: string;
  category: {
    id: number;
    name: string;
  };
  created_at: string;
  cover_image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = `http://localhost:8000/api/articles/`;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}${id}/`);
  }
}
