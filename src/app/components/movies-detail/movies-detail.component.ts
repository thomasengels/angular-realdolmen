import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/movie.model';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.movieService.getMovie(id).subscribe(value => this.movie = value);
  }

  movieProperties(): string[] {
    return Object.keys(this.movie);
  }
}
