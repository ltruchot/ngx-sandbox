// ng
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// modules
import { AppStoreModule } from '@store/app-store.module';
import { CoreModule } from '@core/core.module';
// components
import { AuthFormComponent } from './auth-form.component';
import { LoginComponent } from '@shared/components/auth-form/login/login.component';
import { RegisterComponent } from '@shared/components/auth-form/register/register.component';

describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          FormsModule,
          AppStoreModule.forRoot(),
          CoreModule
        ],
        declarations: [AuthFormComponent, LoginComponent, RegisterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
