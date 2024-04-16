import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCardInformation(cardNumber: string): Observable<any> {
    const url = `http://localhost:8080/api/cl/card/information?cardNumber=${cardNumber}`;
    return this.http.get(url);
  }
}
