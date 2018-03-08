// ng
import { Injectable } from '@angular/core';
// npm
import { Observable } from 'rxjs/Observable';
// services
import { ApiService } from '@core/services/api.service';
// models
import { IUser } from '@models/user.model';

@Injectable()
export class AuthStoreService {
  constructor(private apiService: ApiService) {}
  register(user: IUser): Observable<any> {
    return this.apiService.request({ method: 'post', url: 'user', data: user });
  }
  login(user: IUser): Observable<any> {
    return this.apiService.request({
      method: 'post',
      url: 'login',
      data: user
    });
  }
  user(): Observable<IUser> {
    return this.apiService.request({ method: 'get', url: 'user', auth: true });
  }
}
