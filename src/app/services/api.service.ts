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
    return this.http.get<any>(url);
  }
  getSingleClientData(id: number): Observable<any> {
    const url = `${this.apiUrl}client/${id}`;
    return this.http.get<any>(url);
  }
  getTop5ClientByOrder(): Observable<any> {
    const url = `${this.apiUrl}client/top5orders?active=true`;
    return this.http.get<any>(url);
  }
  getTop5ClientByTotalSpent(): Observable<any> {
    const url = `${this.apiUrl}client/top5spent?active=true`;
    return this.http.get<any>(url);
  }
  delSingleClientData(id: number): Observable<any> {
    const url = `${this.apiUrl}client/${id}`;
    return this.http.delete<any>(url);
  }
  putSingleClientData(id: number, clientData: any): Observable<any> {
    const url = `${this.apiUrl}client/${id}`;
    return this.http.put<any>(url, clientData);
  }
  postSingleClientData(clientData: any): Observable<any> {
    const url = `${this.apiUrl}client`;
    return this.http.post<any>(url, clientData);
  }

}
