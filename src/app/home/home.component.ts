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
  clientCreatedTimestamp: any = null;
  clientUpdatedTimestamp: any = null;

  items: any[] = [];
  item: any = null;
  itemId: number = 1;
  itemCreatedTimestamp: any = null;
  itemUpdatedTimestamp: any = null;

  purchases: any[] = [];
  purchase: any = null;
  purchaseId: number = 1;
  quantity: number = 1;
  purchaseCreatedTimestamp: any = null;
  purchaseUpdatedTimestamp: any = null;

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
          this.clientCreatedTimestamp = this.client.createdAt
          this.clientUpdatedTimestamp = this.client.updatedAt
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

  loadClientVariables(clientid: number, id: number, name: string, cpf: string, createdAt: string, updatedAt: string) {
    this.clientId = clientid
    this.client.id = id
    this.client.name = name
    this.client.cpf = cpf
    this.clientCreatedTimestamp = createdAt
    this.clientUpdatedTimestamp = updatedAt
  }

  loadItemVariables(itemid: number, id: number, name: string, price: string, createdAt: string, updatedAt: string) {
    this.itemId = itemid
    this.item.id = id
    this.item.name = name
    this.item.price = price
    this.itemCreatedTimestamp = createdAt
    this.itemUpdatedTimestamp = updatedAt
  }

  loadPurchaseVariables(purchaseid: number, id: number, quantity: number, clientId: number, clientid: number, itemId: number, itemid: number, createdAt: string, updatedAt: string) {
    this.purchaseId = purchaseid
    this.purchase.id = id
    this.quantity = quantity
    this.clientId = clientId
    this.client.id = clientid
    this.itemId = itemId
    this.item.id = itemid
    this.purchaseCreatedTimestamp = createdAt
    this.purchaseUpdatedTimestamp = updatedAt
  }

  test(id: number) {
    console.log(id)
  }

  //* ITEM

  fetchAllItemData() {
    this.loading = true;
    this.apiService.getAllItemData().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.dados && Array.isArray(response.dados)) {
          this.items = response.dados;
        } else {
          console.warn('No valid item data found in response.');
          this.items = [];
        }
        console.log('API Response ITEMS:', this.items)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  fetchSingleItemData(id: number) {
    this.loading = true;
    this.apiService.getSingleItemData(id).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.item = response.item;
          this.itemCreatedTimestamp = this.item.createdAt
          this.itemUpdatedTimestamp = this.item.updatedAt
        } else {
          console.warn('No valid item data found in response.');
          this.item = [];
        }
        console.log('API Response ITEM:', this.item)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  deleteSingleItemData(id: number) {
    this.loading = true;
    this.apiService.delSingleItemData(id).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.item = response.item;
        } else {
          console.warn('No valid item data found in response.');
          this.item = [];
        }
        console.log('API Response ITEM:', this.item)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  editSingleItemData(id: number) {
    this.loading = true;

    const newClientData = {
      name: this.item.name,
      price: parseInt(this.item.price, 10)
    };

    this.apiService.putSingleItemData(id, newClientData).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.item = response.item;
        } else {
          console.warn('No valid item data found in response.');
          this.item = [];
        }
        console.log('API Response ITEM:', this.item);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  createSingleItemData() {
    this.loading = true;

    const newClientData = {
      name: this.item.name,
      price: parseInt(this.item.price, 10)
    };

    this.apiService.postSingleItemData(newClientData).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.item) {
          this.item = response.item;
        } else {
          console.warn('No valid item data found in response.');
          this.item = [];
        }
        console.log('API Response ITEM:', this.item);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  fetchTopItemsByAmountOrdered() {
    this.loading = true;
    this.apiService.getTopItemsByAmountOrdered().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.dados && Array.isArray(response.dados)) {
          this.items = response.dados;
        } else {
          console.warn('No valid item data found in response.');
          this.items = [];
        }
        console.log('API Response ITEMS:', this.items)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  //* PURCHASE

  fetchAllPurchaseData() {
    this.loading = true;
    this.apiService.getAllPurchaseData().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.dados && Array.isArray(response.dados)) {
          this.purchases = response.dados;
        } else {
          console.warn('No valid purchase data found in response.');
          this.purchases = [];
        }
        console.log('API Response PURCHASES:', this.purchases)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  fetchSinglePurchaseData(id: number) {
    this.loading = true;
    this.apiService.getSinglePurchaseData(id).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.purchase = response.purchase;
          this.purchaseCreatedTimestamp = this.purchase.createdAt
          this.purchaseUpdatedTimestamp = this.purchase.updatedAt
        } else {
          console.warn('No valid purchase data found in response.');
          this.purchase = [];
        }
        console.log('API Response PURCHASE:', this.purchase)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  deleteSinglePurchaseData(id: number) {
    this.loading = true;
    this.apiService.delSinglePurchaseData(id).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.purchase = response.purchase;
        } else {
          console.warn('No valid purchase data found in response.');
          this.purchase = [];
        }
        console.log('API Response PURCHASE:', this.purchase)
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  editSinglePurchaseData(id: number) {
    this.loading = true;

    const newPurchaseData = {
      clientId: this.clientId,
      itemId: this.itemId,
      quantity: this.quantity
    };

    this.apiService.putSinglePurchaseData(id, newPurchaseData).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.purchase = response.purchase;
        } else {
          console.warn('No valid purchase data found in response.');
          this.purchase = [];
        }
        console.log('API Response PURCHASE:', this.purchase);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }

  createSinglePurchaseData() {
    this.loading = true;

    const newPurchaseData = {
      clientId: this.clientId,
      itemId: this.itemId,
      quantity: this.quantity
    };

    this.apiService.postSinglePurchaseData(newPurchaseData).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.purchase) {
          this.purchase = response.purchase;
        } else {
          console.warn('No valid purchase data found in response.');
          this.purchase = [];
        }
        console.log('API Response PURCHASE:', this.purchase);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }
}