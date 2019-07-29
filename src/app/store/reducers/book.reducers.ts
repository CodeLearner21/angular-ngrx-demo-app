import { initialBookState } from '../states/book.state';
import { BookActions, BookActionTypes } from '../actions/book.actions';
import { BookState } from '../states/book.state';

export const bookReducers = (
    state = initialBookState,
    action: BookActions
) : BookState => {
    
    switch(action.type) {
        case BookActionTypes.GET_BOOKS_SUCCESS: {
            return {
                ...state,
                books: action.payload
            }
        }
        case BookActionTypes.GET_BOOK_SUCCESS: {
            return {
                ...state,
                selectedBook: action.payload
            }
        }
        default:
            return state;
    }
}