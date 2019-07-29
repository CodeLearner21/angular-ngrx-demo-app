import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { AppState } from '../states/app.state';
import { Store, select } from '@ngrx/store';
import { GetBooks, BookActionTypes, GetBooksSuccess, GetBook, GetBookSuccess } from '../actions/book.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { selectBookList } from '../selectors/book.selectors';


@Injectable()
export class BookEffects {
  
  @Effect()
  getBook$ = this.actions$.pipe(
    ofType<GetBook>(BookActionTypes.GET_BOOK),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectBookList))),
    switchMap(([id, books]) => {
      const selectedBook = books.filter(book => book.id === id);
      return of(new GetBookSuccess(selectedBook[0]));
    })
  );

  @Effect()
  getBooks$ = this.actions$.pipe(
    ofType<GetBooks>(BookActionTypes.GET_BOOKS),
    switchMap(() => this.bookService.getAll()),
    switchMap((bookHttp: Book[]) => of(new GetBooksSuccess(bookHttp)))
  );

  constructor(private actions$: Actions, private bookService: BookService, private store: Store<AppState>) { }

}
