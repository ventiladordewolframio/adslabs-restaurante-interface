import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule, FormsModule],  // Import CommonModule and FormsModule directly
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  clients: any[] = [];

  client: any = null;
  clientId: number = 1;

  loading = false;

  constructor(private apiService: ApiService) { }

  // Method triggered when the button is clicked
  fetchAllClientData() {
    this.loading = true;
    this.apiService.getAllClientData(true).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.dados && Array.isArray(response.dados)) {
          this.clients = response.dados;
        } else {
          console.warn('No valid client data found in response.');
          this.clients = [];
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

  fetchTop5ClientsByOrder() {
    this.loading = true;
    this.apiService.getTop5ClientByOrder().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.dados && Array.isArray(response.dados)) {
          this.clients = response.dados;
        } else {
          console.warn('No valid client data found in response.');
          this.clients = [];
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

  fetchTop5ClientsByTotalSpent() {
    this.loading = true;
    this.apiService.getTop5ClientByTotalSpent().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.dados && Array.isArray(response.dados)) {
          this.clients = response.dados;
        } else {
          console.warn('No valid client data found in response.');
          this.clients = [];
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

  fetchSingleClientData(id: number) {
    this.loading = true;
    this.apiService.getSingleClientData(id).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.client = response.client;
        } else {
          console.warn('No valid client data found in response.');
          this.client = [];
        }
        console.log('API Response CLIENT:', this.client)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  deleteSingleClientData(id: number) {
    this.loading = true;
    this.apiService.delSingleClientData(id).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.client = response.client;
        } else {
          console.warn('No valid client data found in response.');
          this.client = [];
        }
        console.log('API Response CLIENT:', this.client)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  editSingleClientData(id: number) {
    this.loading = true;

    const newClientData = {
      name: this.client.name,
      cpf: this.client.cpf
    };

    this.apiService.putSingleClientData(id, newClientData).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.client) {
          this.client = response.client;
        } else {
          console.warn('No valid client data found in response.');
          this.client = [];
        }
        console.log('API Response CLIENT:', this.client);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  createSingleClientData() {
    this.loading = true;

    const newClientData = {
      name: this.client.name,
      cpf: this.client.cpf
    };

    this.apiService.postSingleClientData(newClientData).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.client) {
          this.client = response.client;
        } else {
          console.warn('No valid client data found in response.');
          this.client = [];
        }
        console.log('API Response CLIENT:', this.client);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  loadVariables(clientid: number, id: number, name: string, cpf: string) {
    this.clientId = clientid
    this.client.id = id
    this.client.name = name
    this.client.cpf = cpf
  }

  test(id: number) {
    console.log(id)
  }
}