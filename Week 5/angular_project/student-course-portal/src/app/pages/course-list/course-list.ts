import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectAllCourses,
  selectCoursesError,
  selectCoursesLoading
} from '../../store/course/course.selectors';
import { loadCourses } from '../../store/course/course.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';


@Component({
  selector: 'app-course-list',
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})

export class CourseList implements OnInit {
  id = Math.random();
  courses$!: Observable<Course[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  selectedCourseId: number | null = null;
  enrolledIds$!: Observable<number[]>;

  searchTerm = '';
  

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  this.searchTerm =
    this.route.snapshot.queryParamMap.get('search') ?? '';

    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);

    this.store.dispatch(loadCourses());
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy helps Angular update only changed course cards.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
    }
    

  viewCourse(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  onSearchChange(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge'
    });
  }
}