import { reducer } from './auth.reducer';
import * as fromAuth from './auth.reducer';

describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = reducer(undefined, action);
      expect(result).toEqual(fromAuth.initialState);
    });
  });
});
