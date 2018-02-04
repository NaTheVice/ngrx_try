import { LoadMovies, LoadMoviesSuccess} from './actions';
import * as movieActions from './actions';
import {Http} from '@angular/http';

import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';


@Injectable()
export class MovieEffects {

    @Effect()
    loadMovies: Observable<LoadMoviesSuccess> = this.actions.ofType<LoadMovies>('LOAD_MOVIES').switchMap((action: LoadMovies) => {
        console.log('hhh');
        return this.http.get('http://jsonplaceholder.typicode.com/posts').map( post => {
            // console.log(post);
            return post.json();

        }).map(body => {
            console.log(body);
            return new LoadMoviesSuccess(body);
        });
    });

    constructor(public actions: Actions, public http: Http) {}
}
