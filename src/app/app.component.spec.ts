// ng
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// modules
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { AppStoreModule } from '@store/app-store.module';
// components
import { AppComponent } from './app.component';
// services
import { ApiService } from '@core/services/api.service';
import { AppRoutingModule } from '@app/app-routing.module';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          AppStoreModule.forRoot(),
          AppRoutingModule,
          CoreModule,
          SharedModule
        ],
        declarations: [AppComponent],
        providers: [ApiService]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
