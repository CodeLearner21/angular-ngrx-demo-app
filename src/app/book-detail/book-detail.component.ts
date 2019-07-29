import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/states/app.state';
import { Router, ActivatedRoute } from '@angular/router';
import { GetBook } from '../store/actions/book.actions';
import { selectSelectedBook } from '../store/selectors/book.selectors';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$ = this.store.pipe(select(selectSelectedBook));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    let requestId = this.route.snapshot.params.id;
    this.store.dispatch(new GetBook(+requestId));
  }

}
