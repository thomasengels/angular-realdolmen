import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MoviesDetailComponent} from './components/movies-detail/movies-detail.component';
import {MoviesAddComponent} from './components/movies-add/movies-add.component';
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

export const routes = [{
   path: '',
   component: MoviesListComponent,
   children: [
   {
      path: 'add',
      component: MoviesAddComponent
   },
   {
      path: ':id',
      component: MoviesDetailComponent
   }]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class MovieRoutingModule {}

