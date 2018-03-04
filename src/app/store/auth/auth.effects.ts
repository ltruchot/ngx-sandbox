// ng
import { Injectable } from '@angular/core';
// npm
import { Actions, Effect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
// store
import { AuthStoreService } from './auth-store.service';
import * as authActions from './auth.actions';
// models
import { IUser } from '@models/user.model';

@Injectable()
export class AuthEffects {
  @Effect()
  register$ = this.actions$.ofType(authActions.REGISTER).pipe(
    map((action: authActions.RegisterAction) => action.payload),
    switchMap((user: IUser) =>
      this.authStoreService.register(user).pipe(
        // If successful, dispatch success action with result
        switchMap((res: string) => [
          new authActions.RegisterSuccessAction(res),
          new authActions.UserAction()
        ]),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.RegisterFailAction(err))
        )
      )
    )
  );

  @Effect()
  login$ = this.actions$.ofType(authActions.LOGIN).pipe(
    map((action: authActions.LoginAction) => action.payload),
    switchMap((user: IUser) =>
      this.authStoreService.login(user).pipe(
        // If successful, dispatch success action with result
        switchMap((res: string) => [
          new authActions.LoginSuccessAction(res),
          new authActions.UserAction()
        ]),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.LoginFailAction(err))
        )
      )
    )
  );

  @Effect()
  user$ = this.actions$.ofType(authActions.USER).pipe(
    switchMap(() =>
      this.authStoreService.user().pipe(
        // If successful, dispatch success action with result
        map((res: IUser) => {
          return new authActions.UserSuccessAction(res);
        }),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.UserFailAction(err))
        )
      )
    )
  );

  constructor(
    private authStoreService: AuthStoreService,
    private actions$: Actions
  ) {}
}
