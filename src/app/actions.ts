import {Action} from '@ngrx/store';

export const LOAD_MOVIES = 'LOAD_MOVIES';

export class LoadMovies implements Action {
    readonly type = 'LOAD_MOVIES';
}

export class LoadMoviesSuccess implements Action {
    readonly type = 'LOAD_MOVIES_SUCCESS';
    constructor(public payload: Array<any>) {}
}

export type Actions =
| LoadMovies | LoadMoviesSuccess;
