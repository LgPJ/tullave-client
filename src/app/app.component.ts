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

  constructor(private cardService: CardService) {}

  consult(card: string) {
    this.cardService.getCardInformation(card).subscribe({
      next: (res) => {
        this.userName = res['data']['userName'];
        this.userLastName = res['data']['userLastName'];
        this.profile = res['data']['profile'];
        this.balance = res['data']['balance'];
        this.virtualBalance = res['data']['virtualBalance'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
