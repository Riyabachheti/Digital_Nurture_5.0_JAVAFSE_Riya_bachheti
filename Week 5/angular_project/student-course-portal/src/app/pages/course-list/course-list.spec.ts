import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import {
  MockStore,
  provideMockStore
} from '@ngrx/store/testing';
import {
  beforeEach,
  describe,
  expect,
  it,
  vi
} from 'vitest';
import { Course } from '../../models/course.model';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseList } from './course-list';


describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const mockCourses: Course[] = [
    {
      id: 1,
      name: 'Java Programming',
      code: 'CS101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Angular',
      code: 'CS201',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  const initialState = {
    course: {
      courses: mockCourses,
      loading: false,
      error: null
    },
    enrollment: {
      enrolledCourseIds: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: Router,
          useValue: {
            navigate: vi.fn()
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({})
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should render one course card for each course in store state', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(
      By.directive(CourseCard)
    );

    expect(cards).toHaveLength(2);
  });

  it('should show the loading message when store loading is true', async () => {
    store.setState({
      ...initialState,
      course: {
        courses: [],
        loading: true,
        error: null
      }
    });

    store.refreshState();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(
      'Loading courses...'
    );
  });
});