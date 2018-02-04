import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {MovieEffects} from './effects';
import * as reducer from './reducers/index';
import { MoviesComponent } from './movies/movies.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    StoreModule.forRoot({movies: reducer.reducer}),
    HttpModule,
    EffectsModule.forRoot([MovieEffects]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
