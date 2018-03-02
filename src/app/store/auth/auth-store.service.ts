// ng
import { Injectable } from '@angular/core';
// npm
import { Observable } from 'rxjs/Observable';
// services
import { ApiService } from '@core/services/api.service';

@Injectable()
export class AuthStoreService {
  constructor(private apiService: ApiService) {}
  register(user: any): Observable<any> {
    return this.apiService.postResources('user', user);
  }
}
