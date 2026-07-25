import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CourseService } from './course';

describe('CourseService', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });

    const service = TestBed.inject(CourseService);

    expect(service).toBeTruthy();
  });
});