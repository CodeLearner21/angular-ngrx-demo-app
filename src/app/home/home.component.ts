import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectBookList } from '../store/selectors/book.selectors';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { GetBooks } from '../store/actions/book.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$: Observable<Book[]> = this.store.pipe(select(selectBookList))

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetBooks());
  }

  navigateToBook(id: number) {
    this.router.navigate(['book-detail', id]);
  }

}
