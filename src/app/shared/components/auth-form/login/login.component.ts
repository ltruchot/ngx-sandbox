// ng
import { Component, EventEmitter, Output } from '@angular/core';
// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @Output() login = new EventEmitter<IUser>();
  user: { login: string; password: string } = {
    login: '',
    password: ''
  };
  constructor() {}
  onSubmit(formValue: IUser, formValid: boolean): void {
    if (formValid) {
      this.login.emit(formValue);
    }
  }
}
