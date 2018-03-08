// ng
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Component
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoginComponent } from './auth-form/login/login.component';
import { RegisterComponent } from './auth-form/register/register.component';
import { LogoutComponent } from './auth-form/logout/logout.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [AuthFormComponent],
  declarations: [AuthFormComponent, LoginComponent, RegisterComponent, LogoutComponent],
  providers: []
})
export class ComponentsModule {}
