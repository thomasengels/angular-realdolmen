import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie.model';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  moviesSearch$: Observable<Movie[]>;

  titleControl: FormControl;

  constructor(private movieService: MoviesService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.titleControl = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    this.titleControl.valueChanges.subscribe(newValue => {
        if (this.titleControl.valid){
          this.moviesSearch$ = this.movieService.lookupMovie(newValue);
        }});
  }

  search() {
    this.moviesSearch$ = this.movieService.lookupMovie(this.titleControl.value);
    this.titleControl.setValidators([Validators.required, Validators.minLength(5)]);
    this.titleControl.updateValueAndValidity();
  }

  addMovie(onlineId: string) {
    this.movieService.addMovie(onlineId).subscribe(movie => {
       this.router.navigate(['/movies', movie.id]);
    });
  }
}
