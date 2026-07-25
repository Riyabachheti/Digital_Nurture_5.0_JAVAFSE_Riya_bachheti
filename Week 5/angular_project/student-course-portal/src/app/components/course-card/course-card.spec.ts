import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { describe, beforeEach, expect, it, vi } from 'vitest';
import { Course } from '../../models/course.model';
import { CourseCard } from './course-card';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [provideMockStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name from @Input', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('h3'));
    expect(heading.nativeElement.textContent).toContain(
      'Data Structures'
    );
  });

  it('should emit the course id when Enroll is clicked', () => {
    component.course = mockCourse;
    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');

    fixture.detectChanges();

    const enrollButton = fixture.debugElement.query(By.css('button'));
    enrollButton.nativeElement.click();

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should apply card--full when credits are 4 or more', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const card = fixture.debugElement.query(By.css('div'));
    expect(card.nativeElement.classList).toContain('card--full');
  });

  it('should log when the course input changes', () => {
    const logSpy = vi
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    component.ngOnChanges({
      course: new SimpleChange(undefined, mockCourse, true)
    });

    expect(logSpy).toHaveBeenCalledWith('Course input changed');

    logSpy.mockRestore();
  });
});