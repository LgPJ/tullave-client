import { Component } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  card = '';
  userName = '';
  userLastName = '';
  fullName = this.userName + ' ' + this.userLastName
  profile = '';
  virtualBalance = 0;
  balance = 0;
  errorMessage: string = ''; 

  constructor(private cardService: CardService) {}

  consult(card: string) {
    debugger;
    this.cardService.getCardInformation(card).subscribe({
      next: (res) => {
        this.userName = res['data']['userName'];
        this.userLastName = res['data']['userLastName'];
        this.profile = res['data']['profile'];
        this.balance = res['data']['balance'];
        this.virtualBalance = res['data']['virtualBalance'];
        this.fullName = `${this.userName} ${this.userLastName}`;
        this.errorMessage = '';
      },
      error: (error) => {
        if (error.error && error.error.data) {
          this.errorMessage = error.error.data; 
        } else {
          this.errorMessage = 'Error al obtener la información de la tarjeta';
        }
        console.log(error);
      }
    });
  }
}
