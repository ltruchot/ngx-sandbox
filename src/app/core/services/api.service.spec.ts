// ng
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// services
import { ApiService } from './api.service';

const apiEnv = 'https://jsonplaceholder.typicode.com/';

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
          .request({ method: 'get', url: 'posts', apiEnv })
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
          .request({
            method: 'post',
            url: 'posts',
            data: {
              title: 'foo',
              body: 'bar',
              userId: 1
            },
            apiEnv
          })
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
          .request({
            method: 'put',
            url: 'posts/1',
            data: {
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1
            },
            apiEnv
          })
          .subscribe((data: any) => {
            expect(data.body).toBe('bar');
          });
      })
    )
  );
  it(
    'it should perform a PATCH request',
    async(
      inject([ApiService], (apiService: ApiService) => {
        apiService
          .request({
            method: 'patch',
            url: 'posts/1',
            data: {
              title: 'foo'
            },
            apiEnv
          })
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
          .request({ method: 'delete', url: 'posts/1', apiEnv })
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
            .request({ method: 'get', url: 'posts/404', apiEnv })
            .subscribe((err: any) => {
              expect(err.status).toBe(404);
            })
        );
      })
    )
  );
});
