import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationService } from './basic-authentication-service.service';

describe('BasicAuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthenticationService = TestBed.get(BasicAuthenticationService);
    expect(service).toBeTruthy();
  });
});
