import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EnrollmentService } from '../../services/enrollment';
import { Student } from '../../models/student.model';


@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {
  course: Course | undefined;

  constructor(
  private route: ActivatedRoute,
  private courseService: CourseService,
  private enrollmentService: EnrollmentService,
  private cdr: ChangeDetectorRef
) {}
  
  enrolledStudents: Student[] = [];

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.courseService.getCourseById(id).subscribe({
    next: (course) => {
      this.course = course;
      this.cdr.markForCheck();
    },
    error: (error) => {
      console.error('Course could not be loaded:', error);
      this.course = undefined;
      this.cdr.markForCheck();
    }
  });

  this.enrollmentService.getStudentsByCourse(id).subscribe({
    next: (students) => {
      this.enrolledStudents = students;
      this.cdr.markForCheck();
    },
    error: (error) => {
      console.error('Students could not be loaded:', error);
      this.enrolledStudents = [];
      this.cdr.markForCheck();
    }
  });
}
}