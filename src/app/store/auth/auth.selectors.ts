import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const getAuthState = createFeatureSelector<fromAuth.IAuthState>('auth');
export const getAuthToken = createSelector(getAuthState, fromAuth.getAuthToken);
