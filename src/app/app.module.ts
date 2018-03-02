// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { CoreModule } from '@core/core.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
