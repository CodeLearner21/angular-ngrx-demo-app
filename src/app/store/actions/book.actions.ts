import { Action } from "@ngrx/store";
import { Book } from "src/app/models/book.model";


export enum BookActionTypes {
    GET_BOOKS               = '[Book] Get Books',
    GET_BOOKS_SUCCESS       = '[Book] Get Books Success',
    GET_BOOK                = '[Book] Get Book',
    GET_BOOK_SUCCESS        = '[Book] Get Book Success'
};

export class GetBooks implements Action {
    readonly type = BookActionTypes.GET_BOOKS;
}

export class GetBooksSuccess implements Action {
    readonly type = BookActionTypes.GET_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}

export class GetBook implements Action {
    readonly type = BookActionTypes.GET_BOOK;
    constructor(public payload: number) { }
}

export class GetBookSuccess implements Action {
    readonly type = BookActionTypes.GET_BOOK_SUCCESS;
    constructor(public payload: Book) {}
}

export type BookActions = GetBooks | GetBooksSuccess | GetBook | GetBookSuccess;