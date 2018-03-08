// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { getAuthLoading } from '@store/auth/auth.selectors';
import { GetCurrentUserAction } from '@store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authLoading$: Observable<boolean>;
  constructor(private store: Store<IAuthState>) {}

  ngOnInit(): void {
    // watch auth loading
    this.authLoading$ = this.store.select(getAuthLoading);
    // try to get current authenticate user
    this.store.dispatch(new GetCurrentUserAction());
  }
}
