import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing.module';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import {Constant} from './services/constant';
import { MoviesAddComponent } from './components/movies-add/movies-add.component';
import {FormsModule} from '@angular/forms';
import { MovieListItemComponent } from './components/movies-list/movie-list-item/movie-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesAddComponent,
    MovieListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
