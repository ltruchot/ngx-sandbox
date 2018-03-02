import { TestBed /*, fakeAsync, tick */ } from '@angular/core/testing';
import { AuthEffects } from './auth.effects';
import { AuthStoreService } from './auth-store.service';

describe('AuthEffects', () => {
  // let authEffects;
  // let authStoreService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AuthEffects,
        {
          provide: AuthStoreService,
          useValue: jasmine.createSpyObj('authStoreService', ['get'])
        }
      ]
    })
  );

  beforeEach(() => {
    // authEffects = TestBed.get(AuthEffects);
    // authStoreService = TestBed.get(AuthStoreService);
  });

  describe('auth$', () => {
    it('should return a LOAD_AUTH_SUCCESS action, on success', () => {});

    it('should return a LOAD_AUTH_FAIL action, on error', () => {});
  });
});
