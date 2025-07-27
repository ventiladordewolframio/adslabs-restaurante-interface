import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adslabs-restaurante-interface';

  constructor(private apiService: ApiService) { }

  // Method to handle button click and fetch data
async onFetchData(): Promise<void> {
    try {
      const data = await this.apiService.getClientData(true).toPromise();
      console.log('API Response:', data);  // Print the response to the console
    } catch (error) {
      console.error('Error fetching data:', error);  // Handle errors
    }
  }
}