import {Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: 'movies',
        loadChildren: 'app/movies/movies.module#MoviesModule'
    }
]
