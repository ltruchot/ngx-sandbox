// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { getAuthCurrentUser, getAuthLoading } from '@store/auth/auth.selectors';
import { UserAction } from '@store/auth/auth.actions';
// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser$: Observable<IUser>;
  loading$: Observable<boolean>;
  constructor(private store: Store<IAuthState>) {}
  ngOnInit(): void {
    this.currentUser$ = this.store.select(getAuthCurrentUser);
    this.loading$ = this.store.select(getAuthLoading);
    this.store.dispatch(new UserAction());
  }
}
