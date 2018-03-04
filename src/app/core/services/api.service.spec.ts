// ng
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// services
import { ApiService } from './api.service';

const testApi = 'https://jsonplaceholder.typicode.com/';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    });
  });

  it(
    'it should be created',
    inject([ApiService], (apiService: ApiService) => {
      expect(apiService).toBeTruthy();
    })
  );
  it(
    'it should perform a GET request',
    async(
      inject([ApiService], (apiService: ApiService) => {
        apiService
          .getResources('posts', false, null, testApi)
          .subscribe((data: any) => {
            expect(data.length).toBe(100);
            expect(data[0].title).toBe(
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
            );
          });
      })
    )
  );
  it(
    'it should perform a POST request',
    async(
      inject([ApiService], (apiService: ApiService) => {
        apiService
          .postResources(
            'posts',
            {
              title: 'foo',
              body: 'bar',
              userId: 1
            },
            false,
            null,
            testApi
          )
          .subscribe((data: any) => {
            expect(data.title).toBe('foo');
          });
      })
    )
  );
  it(
    'it should perform a PUT request',
    async(
      inject([ApiService], (apiService: ApiService) => {
        apiService
          .putResources(
            'posts/1',
            {
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1
            },
            false,
            null,
            testApi
          )
          .subscribe((data: any) => {
            expect(data.body).toBe('bar');
          });
      })
    )
  );
  it(
    'it should perform a DELETE request',
    async(
      inject([ApiService], (apiService: ApiService) => {
        apiService
          .deleteResources('posts/1', false, null, testApi)
          .subscribe((data: any) => {
            expect(data).toEqual({});
          });
      })
    )
  );
  it(
    '404 response should throw a reactive error',
    async(
      inject([ApiService], (apiService: ApiService) => {
        expect(async () =>
          apiService
            .getResources('posts/404', false, null, testApi)
            .subscribe((err: any) => {
              expect(err.status).toBe(404);
            })
        );
      })
    )
  );
});
