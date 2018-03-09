// ng
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
// services
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [CommonModule, ServicesModule],
  declarations: [],
  providers: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Should import it only in AppModule'
      );
    }
  }
}
