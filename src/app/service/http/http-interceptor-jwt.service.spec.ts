import { TestBed } from '@angular/core/testing';

import { HttpInterceptorJWTService } from './http-interceptor-jwt.service';

describe('HttpInterceptorJWTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptorJWTService = TestBed.get(HttpInterceptorJWTService);
    expect(service).toBeTruthy();
  });
});
