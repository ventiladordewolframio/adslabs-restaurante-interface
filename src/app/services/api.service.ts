import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api/';  // <-- Set the base URL

  constructor(private http: HttpClient) { }

  // Method to get the data from the API
  getAllClientData(active: boolean): Observable<any> {
    const url = `${this.apiUrl}client?active=${active}`;
    return this.http.get<any>(url);  // Send GET request to API
  }
  getSingleClientData(id: number): Observable<any> {
    const url = `${this.apiUrl}client/${id}`;
    return this.http.get<any>(url);  // Send GET request to API
  }
  getTop5ClientByOrder(id: number): Observable<any> {
    const url = `${this.apiUrl}client/${id}`;
    return this.http.get<any>(url);  // Send GET request to API
  }
  getTop5ClientByTotalSpent(id: number): Observable<any> {
    const url = `${this.apiUrl}client/${id}`;
    return this.http.get<any>(url);  // Send GET request to API
  }
  
}
