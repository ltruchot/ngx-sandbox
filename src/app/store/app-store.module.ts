import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Uncomment this line if you want to use the StoreDevtool
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, reducers } from './store-utils.values';
import { AllEffects } from './effects.values';

// -- IMPORT SERVICES --
import { AuthStoreService } from './auth/auth-store.service';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...AllEffects])
    // StoreDevtoolsModule.instrument({
    //     maxAge: 25, //  Retains last 25 states
    // })
  ],
  exports: [],
  providers: [
    // -- PROVIDERS --
    AuthStoreService
  ]
})
export class AppStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppStoreModule
    };
  }
}
