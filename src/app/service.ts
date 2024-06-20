import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NotificationRequest {
  listType: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class CardService {


  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendNotification(request: NotificationRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/notify`, request);
  }
}
