// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { getAuthToken } from '@store/auth/auth.selectors';
import { RegisterAction } from '@store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  auth$: Observable<any>;
  constructor(private store: Store<IAuthState>) {}
  ngOnInit(): void {
    this.auth$ = this.store.select(getAuthToken);
    this.store.dispatch(
      new RegisterAction({
        email: 'ltruchot@adneom.comm',
        password: '12345678',
        login: 'ltruchergqreg'
      })
    );
  }
}
