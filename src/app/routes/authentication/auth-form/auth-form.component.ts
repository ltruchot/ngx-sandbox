// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// import { share } from 'rxjs/operators';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import {
  GetCurrentUserAction,
  LoginAction,
  RegisterAction
} from '@store/auth/auth.actions';
// models
import { IUser, IUserAuth } from '@models/user.model';
import { getAuthCurrentUser } from '@store/auth/auth.selectors';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements OnInit {
  currentUser$: Observable<IUser>;

  constructor(private store: Store<IAuthState>) {}

  ngOnInit(): void {
    // watch current user
    this.currentUser$ = this.store.select(getAuthCurrentUser);
  }

  onLogin(user: IUserAuth): void {
    this.store.dispatch(new LoginAction(user));
  }

  onRegister(user: IUserAuth): void {
    this.store.dispatch(new RegisterAction(user));
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(new GetCurrentUserAction());
  }
}
