import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // No need for NgModule imports, provided globally
})
export class Api {
  private apiUrl = 'http://localhost:3000/api/client';  // Your API endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch active clients from the API
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?active=true`);
  }
}


