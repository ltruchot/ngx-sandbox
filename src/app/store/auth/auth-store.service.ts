// ng
import { Injectable } from '@angular/core';
// npm
import { Observable } from 'rxjs/Observable';
// services
import { ApiService } from '@core/services/api.service';
// models
import { IUser, IUserAuth } from '@models/user.model';

@Injectable()
export class AuthStoreService {
  constructor(private apiService: ApiService) {}
  register(user: IUserAuth): Observable<any> {
    return this.apiService.post({ url: 'user', body: user });
  }
  login(user: IUserAuth): Observable<any> {
    return this.apiService.post({
      url: 'login',
      body: user
    });
  }
  user(): Observable<IUser> {
    return this.apiService.get({ url: 'user', auth: true });
  }
}
