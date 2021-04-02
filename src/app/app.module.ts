import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {RouterModule} from '@angular/router';
import {Constant} from './services/constant';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import {MoviesModule} from "./movies/movies.module";
import {routes} from "./app.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    RouterModule.forRoot(routes),
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
