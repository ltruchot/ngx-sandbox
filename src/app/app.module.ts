// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppStoreModule } from '@store/app-store.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppStoreModule.forRoot(), CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
