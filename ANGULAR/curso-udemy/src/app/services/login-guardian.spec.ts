import { TestBed } from '@angular/core/testing';

import { LoginGuardian } from './login-guardian';

describe('LoginGuardian', () => {
  let service: LoginGuardian;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGuardian);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
