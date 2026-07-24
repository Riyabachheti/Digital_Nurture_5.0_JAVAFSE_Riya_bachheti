import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  isLoading = true;
  courses = [
  {
    id: 1,
    name: 'Java Programming',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  },
  {
    id: 2,
    name: 'Angular',
    code: 'CS201',
    credits: 3,
    gradeStatus: 'failed'
  },
  {
    id: 3,
    name: 'Spring Boot',
    code: 'CS301',
    credits: 4,
    gradeStatus: 'pending'
  },
  {
    id: 4,
    name: 'Database Systems',
    code: 'CS401',
    credits: 3,
    gradeStatus: 'passed'
  },
  {
    id: 5,
    name: 'Operating Systems',
    code: 'CS501',
    credits: 4,
    gradeStatus: 'pending'
  }
];
selectedCourseId: number | null = null;

ngOnInit(): void {
  console.log('CourseList ngOnInit');

  setTimeout(() => {
  this.isLoading = false;
  console.log('isLoading =', this.isLoading);
  console.log('courses =', this.courses);
}, 900);
}

onEnroll(courseId: number): void {
  console.log('Enrolling in course: ' + courseId);
  this.selectedCourseId = courseId;
}
// trackBy helps Angular identify each course uniquely.
// Instead of re-rendering the entire list when data changes,
// Angular updates only the modified items, improving performance.
trackByCourseId(index: number, course: any): number {
  return course.id;
}
}