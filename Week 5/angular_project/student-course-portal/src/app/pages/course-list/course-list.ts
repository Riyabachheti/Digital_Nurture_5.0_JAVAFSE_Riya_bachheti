import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
  { id: 1, name: 'Java Programming', code: 'CS101', credits: 4 },
  { id: 2, name: 'Angular', code: 'CS201', credits: 3 },
  { id: 3, name: 'Spring Boot', code: 'CS301', credits: 4 },
  { id: 4, name: 'Database Systems', code: 'CS401', credits: 3 },
  { id: 5, name: 'Operating Systems', code: 'CS501', credits: 4 }
];
selectedCourseId: number | null = null;
onEnroll(courseId: number): void {
  console.log('Enrolling in course: ' + courseId);
  this.selectedCourseId = courseId;
}
}