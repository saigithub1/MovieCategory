import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MovieCategoryComponent} from './movie-category/movie-category.component';
import {AllMoviesComponent} from './AllMovies/all-movies.component';
import {UIRouterModule} from '@uirouter/angular';
import {MovieDescriptionComponent} from './movie-category/movie-description/movie-description.component';
import {MovieDescriptionDetailsComponent} from './movie-category/movie-description-details/movie-description-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCategoryComponent,
    AllMoviesComponent,
    MovieDescriptionComponent,
    MovieDescriptionDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UIRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
