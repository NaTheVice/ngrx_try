import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../store';
import * as reducer from '../reducers/index';
import { LoadMovies } from '../actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies$: Observable<Array<any>>;

  constructor(private store: Store<State>) {
    this.movies$ = store.select(reducer.getMovieArray);
  }

  ngOnInit() {
    this.store.dispatch(new LoadMovies());
  }

}
