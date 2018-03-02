// ng
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
// services
import { ApiService } from '@core/services/api.service';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
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
