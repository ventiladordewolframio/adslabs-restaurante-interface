import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api/client';  // <-- Set the base URL

  constructor(private http: HttpClient) { }

  // Method to get the data from the API
  getClientData(active: boolean): Observable<any> {
    const url = `${this.apiUrl}?active=${active}`;
    return this.http.get<any>(url);  // Send GET request to API
  }
}
