import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
  { path: 'book-detail/:id', component: BookDetailComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
