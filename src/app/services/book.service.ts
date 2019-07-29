import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://fakerestapi.azurewebsites.net/api/Books')
      .pipe(
        map((data: any[]) => data.map((item: any) => {
          const model: Book = {
            id: item.ID,
            title: item.Title,
            description: item.Description,
            excerpt: item.Excerpt,
            publishDate: item.PublishDate
          };
          return model;
        }))
      );
  }
}
