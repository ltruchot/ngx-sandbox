// ng
import { Component, EventEmitter, Output } from '@angular/core';
// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  @Output() register = new EventEmitter<IUser>();
  user: IUser = {
    login: '',
    email: '',
    password: ''
  };
  constructor() {}
  onSubmit(formValue: IUser, formValid: boolean): void {
    if (formValid) {
      this.register.emit(formValue);
    }
  }
}
