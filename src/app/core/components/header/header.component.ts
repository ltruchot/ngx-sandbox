// ng
import { Component, OnInit } from '@angular/core';
// npm
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// store
// import { IAuthState } from '@store/auth/auth.reducer';
// import {
//   GetCurrentUserAction,
//   LoginAction,
//   RegisterAction
// } from '@store/auth/auth.actions';
// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<IUser>;

  constructor() {}

  ngOnInit(): void {}
}
