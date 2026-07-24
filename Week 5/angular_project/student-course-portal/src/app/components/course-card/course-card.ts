import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: string;
};

@Output() enrollRequested = new EventEmitter<number>();
isEnrolled = false;

  ngOnChanges(changes: SimpleChanges): void {

    console.log('Course input changed');

    console.log(
      'Previous:',
      changes['course']?.previousValue
    );

    console.log(
      'Current:',
      changes['course']?.currentValue
    );
  }

}