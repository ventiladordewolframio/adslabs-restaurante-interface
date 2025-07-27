import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  nome = "123 teste";

  clients: any[] = [];  // Array to store the clients' data
  loading = false;  // Flag to track the loading state

  constructor(private apiService: ApiService) { }

  // Method triggered when the button is clicked
  onFetchData() {
    this.loading = true;
    this.apiService.getAllClientData(true).subscribe(
      (response: any) => {
        console.log('API Response:', response);  // Log the response to inspect the data
        if (response && response.dados && Array.isArray(response.dados)) {
          // Assign the 'dados' array directly to clients
          this.clients = response.dados;  // Directly pass the 'dados' array to clients
        } else {
          console.warn('No valid client data found in response.');
          this.clients = [];  // In case no data is available
        }
        console.log('API Response CLIENTS:', this.clients)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }
}