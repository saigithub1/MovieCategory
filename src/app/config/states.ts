import {AllMoviesComponent} from '../AllMovies/all-movies.component';
import {MovieCategoryComponent} from '../movie-category/movie-category.component';
import {MovieDescriptionComponent} from '../movie-category/movie-description/movie-description.component';
import {MovieDescriptionDetailsComponent} from '../movie-category/movie-description-details/movie-description-details.component';

export const allMoviesState = { name: 'allmovies', url: '/allmovies', component: AllMoviesComponent };

export const MovieCategoryState = {
  name: 'moviecategory', url: '/moviecategory',
  component: MovieCategoryComponent
};

export const MovieDescriptionState = {
  name: 'moviecategory.moviedescription',
  url: '/moviedescription',
  component: MovieDescriptionComponent
};

export const MovieDescriptionDetailsState = {
  name: 'moviecategory.moviedescription.moviedescriptiondetails',
  url: '/moviedescriptiondetails',
  component: MovieDescriptionDetailsComponent
};

