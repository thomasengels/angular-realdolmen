import { Injectable } from '@angular/core';
import {Movie} from '../models/movie.model';
import {Constant} from '../../services/constant';
import {HttpService} from '../../services/http.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MoviesService extends HttpService<Movie>{

  constructor(private constant: Constant, public http: HttpClient) {
    super(http);
  }

  getMovies(): Observable<Movie[]> {
    return this.list(this.constant.MOVIES_API);
  }

  getMovie(id: number): Observable<Movie> {
     return this.get(this.constant.MOVIES_API, id);
  }

  lookupMovie(title: string): Observable<Movie[]> {
    const param = {
       params: {
         title
       }
    };
    return this.http.get<Movie[]>(this.constant.MOVIES_API + '/search', param);
  }

  addMovie(onlineId: string): Observable<Movie>{
    const data = {
      apiId: onlineId
    };
    return this.http.post<Movie>(this.constant.MOVIES_API, data);
  }

  deleteMovie(id: number): Observable<any> {
    return this.delete(this.constant.MOVIES_API + '/' + id);
  }

}
