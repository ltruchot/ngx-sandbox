// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Observable } from 'rxjs/Observable';
// services
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts$: Observable<any>;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.posts$ = this.apiService.getResources<any>('posts');
  }
}
