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

@Injectable()
export class AuthEffects {
  @Effect()
  register$ = this.actions$.ofType(authActions.REGISTER).pipe(
    map((action: authActions.RegisterAction) => action.payload),
    switchMap((user: any) =>
      this.authStoreService.register(user).pipe(
        // If successful, dispatch success action with result
        map((res: any) => new authActions.RegisterSuccessAction(res)),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.RegisterFailAction(err))
        )
      )
    )
  );

  constructor(
    private authStoreService: AuthStoreService,
    private actions$: Actions
  ) {}
}
