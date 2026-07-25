import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap } from 'rxjs';

import { Course } from '../models/course.model';
import { Enrollment } from '../models/enrollment.model';
import { Student } from '../models/student.model';
import { CourseService } from './course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  private readonly studentsUrl = 'http://localhost:3000/students';
  private readonly enrollmentsUrl = 'http://localhost:3000/enrollments';

  constructor(
    private http: HttpClient,
    private courseService: CourseService
  ) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(
      (id) => id !== courseId
    );
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    if (this.enrolledCourseIds.length === 0) {
      return of([]);
    }

    return forkJoin(
      this.enrolledCourseIds.map((id) =>
        this.courseService.getCourseById(id)
      )
    );
  }

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http
      .get<Enrollment[]>(
        `${this.enrollmentsUrl}?courseId=${courseId}`
      )
      .pipe(
        switchMap((enrollments) => {
          const studentRequests = enrollments.map((enrollment) =>
            this.http.get<Student>(
              `${this.studentsUrl}/${enrollment.studentId}`
            )
          );

          return studentRequests.length > 0
            ? forkJoin(studentRequests)
            : of([]);
        })
      );
  }
}