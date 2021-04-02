import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MoviesDetailComponent} from "./components/movies-detail/movies-detail.component";
import {MoviesAddComponent} from "./components/movies-add/movies-add.component";
import {MovieListItemComponent} from "./components/movies-list/movie-list-item/movie-list-item.component";
import {HttpClientModule} from "@angular/common/http";
import {MovieRoutingModule} from "./movie.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MoviesService} from "./services/movies.service";



@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesAddComponent,
    MovieListItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
 providers: [MoviesService]
})
export class MoviesModule { }
