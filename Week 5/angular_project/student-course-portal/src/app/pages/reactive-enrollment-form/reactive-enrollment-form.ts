import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

/* Rejects course codes that begin with XX. */
export function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {
  const courseCode = String(control.value ?? '');

  return courseCode.startsWith('XX')
    ? { noCourseCode: true }
    : null;
}

/* Simulates checking whether an email is already registered. */
export function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = String(control.value ?? '');

      resolve(
        email.includes('test@')
          ? { emailTaken: true }
          : null
      );
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],

      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [simulateEmailCheck]
      ],

      /*
       * Although the guide calls this courseId, it must be text because
       * the custom validator needs to test values such as XX101.
       */
      courseId: [
        '',
        [Validators.required, noCourseCode]
      ],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue],

      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }

    console.log('Form value:', this.enrollForm.value);

    // value excludes disabled controls; getRawValue includes them.
    console.log('Raw form value:', this.enrollForm.getRawValue());
  }
}