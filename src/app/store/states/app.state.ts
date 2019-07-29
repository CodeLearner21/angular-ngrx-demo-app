import { RouterReducerState } from "@ngrx/router-store";
import { BookState, initialBookState } from "./book.state";


export interface AppState {
    route?: RouterReducerState,
    books: BookState
}

export const initialAppState: AppState = {
    books: initialBookState
}

export function getInitialState() : AppState {
    return initialAppState;
}