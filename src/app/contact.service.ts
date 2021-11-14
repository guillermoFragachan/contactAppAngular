import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /** GET heroes from the server */
getContacts(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.URL)
}

  private URL = 'https://jsonplaceholder.typicode.com/users';  // URL to web api


  constructor(
    private http: HttpClient,
    ) { }
}
