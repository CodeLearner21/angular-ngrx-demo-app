import { Book } from "src/app/models/book.model";


export interface BookState {
    books: Book[],
    selectedBook: Book
}

export const initialBookState: BookState = {
    books: null,
    selectedBook: null
}