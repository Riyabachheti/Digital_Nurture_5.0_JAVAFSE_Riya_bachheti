import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from './services/loading';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course-portal');
  constructor(public loadingService: LoadingService) {}
  
}
