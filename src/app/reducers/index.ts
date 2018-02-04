import {LoadMovies, LoadMoviesSuccess} from '../actions';
import { State} from '../store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export function reducer(state: State, action: LoadMovies | LoadMoviesSuccess) {
    if (!state) {
        state = new State();
    }
    switch (action.type) {
        case 'LOAD_MOVIES':
            return { ...state, loading: true};
        case 'LOAD_MOVIES_SUCCESS':
            return { ...state, loading: false, movies: action.payload};
        default:
            return state;
    }

}

export const getMovieState = createFeatureSelector<State>('movies');
export const getMovieArray = createSelector(
    getMovieState,
    (state: State) => state.movies
);
