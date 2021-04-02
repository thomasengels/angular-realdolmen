import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie.model';
import {MoviesService} from '../../services/movies.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) {
  }

  trackByFn(index: number, movie: Movie): number {
    return movie.id;
  }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();
  }
}
