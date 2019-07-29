import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { routerReducer } from "@ngrx/router-store";
import { bookReducers } from './book.reducers';


export const appReducers: ActionReducerMap<AppState, any> = {
    route: routerReducer,
    books: bookReducers
};