import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Highlight } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Input() isEnrolled = false;

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course input changed');
    console.log('Previous:', changes['course']?.previousValue);
    console.log('Current:', changes['course']?.currentValue);
  }

  enroll(event: MouseEvent): void {
    event.stopPropagation();

    this.store.dispatch(
      enrollInCourse({ courseId: this.course.id })
    );

    this.enrollRequested.emit(this.course.id);
  }

  unenroll(event: MouseEvent): void {
    event.stopPropagation();

    this.store.dispatch(
      unenrollFromCourse({ courseId: this.course.id })
    );

    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails(event: MouseEvent): void {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': (this.course.credits ?? 0) >= 4,
      expanded: this.isExpanded
    };
  }
}