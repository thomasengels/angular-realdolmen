import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MoviesDetailComponent} from './components/movies-detail/movies-detail.component';
import {MoviesAddComponent} from './components/movies-add/movies-add.component';

export const routes = [{
   path: 'movies',
   component: MoviesListComponent
},   {
   path: 'movies/add',
   component: MoviesAddComponent
},
   {
   path: 'movies/:id',
   component: MoviesDetailComponent
}
];


