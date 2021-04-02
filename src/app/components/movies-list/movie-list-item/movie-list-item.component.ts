import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../../models/movie.model";

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie;

  @Output() deleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleted.emit(this.movie.id);
  }
}
