// ng
import { Component } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { share } from 'rxjs/operators';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { LoginAction, RegisterAction } from '@store/auth/auth.actions';

// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent {
  constructor(private store: Store<IAuthState>) {}
  onLogin(user: IUser): void {
    this.store.dispatch(new LoginAction(user));
  }
  onRegister(user: IUser): void {
    this.store.dispatch(new RegisterAction(user));
  }
}
