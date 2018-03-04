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
    return this.apiService.postResources('user', user);
  }
  login(user: IUser): Observable<any> {
    return this.apiService.postResources('login', user);
  }
  user(): Observable<IUser> {
    return this.apiService.getResources('user', true);
  }
}
