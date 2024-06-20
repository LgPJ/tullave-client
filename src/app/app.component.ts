import { Component } from '@angular/core';
import { CardService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  listType: string = '';
  message: string = '';

  constructor(private notificationService: CardService) {}

  sendNotification() {
    const request = {
      listType: this.listType,
      message: this.message
    };
    this.notificationService.sendNotification(request).subscribe(
      response => {
        alert('Notificaciones enviadas con éxito.');
      },
      error => {
        alert('Error al enviar notificaciones.');
      }
    );
  }
}
