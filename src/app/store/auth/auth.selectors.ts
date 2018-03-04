// npm
import { createFeatureSelector, createSelector } from '@ngrx/store';
// store
import * as fromAuth from './auth.reducer';

// full state
export const getAuthState = createFeatureSelector<fromAuth.IAuthState>('auth');
// parts of state
export const getAuthLoading = createSelector(getAuthState, fromAuth.loading);
export const getAuthCurrentUser = createSelector(
  getAuthState,
  fromAuth.currentUser
);
