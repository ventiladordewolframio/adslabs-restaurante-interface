import { Component, signal } from '@angular/core';
import { Api } from './services/api';  // Import the Api service

@Component({
  selector: 'app-root',
  templateUrl: './app.html',  // Your HTML template with the button
  styleUrls: ['./app.css'],  // Optional styling
  standalone: true,  // Mark the component as standalone
  imports: []  // Imports, if needed
})

export class App {
  constructor(private api: Api) {}  // Inject the Api service

  // Function that gets called when the button is clicked
  fetchActiveClients(): void {
    // Call the Api service's method to fetch active clients
    this.api.getActiveClients().subscribe(
      (data) => {
        console.log('Active Clients:', data);  // Log the data in the console
      },
      (error) => {
        console.error('Error fetching clients:', error);  // Log any error
      }
    );
  }
}
