import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountHttpServiceService {

  constructor(private http: HttpClient) { }

  saveAccounts(accounts: any[]) : Observable<any> {
    return this.http.post('https://http-service-demo-class2.firebaseio.com/accounts.json', accounts);
  } 
}
