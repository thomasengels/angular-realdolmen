import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie.model';
import {MoviesService} from '../../services/movies.service';
import {Observable} from 'rxjs';
import * as _ from 'underscore';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) {
  }

  trackByFn(index: number, movie: Movie): number {
    return movie.id;
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
        movies => this.movies = movies
    );
  }

  filter(searchValues: any){
    this.moviesService.getMovies().subscribe(movies => {
        this.movies = _.filter(movies, element => {
          const yearNullOrEquals = !searchValues.year || element.year == searchValues.year;
          return yearNullOrEquals;
        });
    });
  }

  deleteMovie(movieId: number) {
     console.log(movieId);
  }
}
