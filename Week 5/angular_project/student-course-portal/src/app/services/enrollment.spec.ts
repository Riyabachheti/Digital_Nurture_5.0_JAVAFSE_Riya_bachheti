import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { EnrollmentService } from './enrollment';

describe('EnrollmentService', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });

    const service = TestBed.inject(EnrollmentService);

    expect(service).toBeTruthy();
  });
});