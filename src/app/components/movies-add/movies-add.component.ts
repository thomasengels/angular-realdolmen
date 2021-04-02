import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie.model';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  moviesSearch$: Observable<Movie[]>;

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }

  search(value: any) {
    this.moviesSearch$ = this.movieService.lookupMovie(value.title);
  }

  addMovie(onlineId: string) {
    this.movieService.addMovie(onlineId).subscribe(movie => {
       this.router.navigate(['/movies', movie.id]);
    });
  }
}
