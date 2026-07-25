import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {
  constructor(public notificationService: NotificationService) {}

  /*
   * This provider creates a separate NotificationService instance for this
   * component and its children, rather than using one application-wide instance.
   */
}