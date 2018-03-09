// ng
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// modules
import { SharedModule } from '@shared/shared.module';
// component
import { AuthenticationComponent } from './authentication.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoginComponent } from './auth-form/login/login.component';
import { RegisterComponent } from './auth-form/register/register.component';
import { LogoutComponent } from './auth-form/logout/logout.component';

const routes = [
  { path: '', component: AuthenticationComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [AuthFormComponent],
  declarations: [
    AuthenticationComponent,
    AuthFormComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ]
})
export class AuthenticationModule {}
