import {MovieCategoryComponent} from './movie-category/movie-category.component';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {uiRouterConfigFn} from './config/router.config';
import {allMoviesState, MovieCategoryState, MovieDescriptionDetailsState, MovieDescriptionState} from './config/states';

const INITIAL_STATES = [allMoviesState, MovieCategoryState, MovieDescriptionState, MovieDescriptionDetailsState];


@NgModule({
  imports: [UIRouterModule.forRoot({
    states: INITIAL_STATES,
    useHash: true,
    config: uiRouterConfigFn
  })],
  exports: []
})
export class AppRoutingModule {

}
