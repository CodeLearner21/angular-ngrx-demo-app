import { AppState } from '../states/app.state';
import { createSelector } from '@ngrx/store';
import { BookState } from '../states/book.state';

const selectBooks = (state: AppState) => state.books;

export const selectBookList = createSelector(
    selectBooks,
    (state: BookState) => state.books
);

export const selectSelectedBook = createSelector(
    selectBooks,
    (state: BookState) => state.selectedBook
);