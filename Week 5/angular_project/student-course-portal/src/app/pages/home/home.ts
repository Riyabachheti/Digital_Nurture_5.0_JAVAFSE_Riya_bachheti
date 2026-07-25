// Property binding [property] sends data from the component to the DOM.
// Two-way binding [(ngModel)] keeps the component and the DOM synchronized in both directions.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { CourseService } from '../../services/course';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CourseSummaryWidget,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  constructor(private courseService: CourseService) {}
  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.availableCourses = courses.length;
      }
    });

    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}