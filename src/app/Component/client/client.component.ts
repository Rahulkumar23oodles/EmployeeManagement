import { Component, inject, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Client } from 'src/app/model/class/client';
import { ApiResponsemodel } from 'src/app/model/interface/user';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientList:Client[]=[];
  clientobj: Client = new Client();
  clientSevice = inject(ClientService);
  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);
  displayEditDialog: boolean = false;
  loading:boolean=true;
 
  ngOnInit(): void {
    this.loadClient();
  }
  loadClient() {
    this.clientSevice.getallClient().subscribe((res: ApiResponsemodel) => {
      this.clientList = res.data;
      this.loading=false;
      console.log(this.clientList)
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Client Added Successfully' });

    });
  }
  onEditClient(data: Client) {
    this.clientobj = { ...data }; // Create a copy to prevent direct binding
    this.displayEditDialog = true;
  }

  onSaveClient() {
    console.log("Payload before API call:", this.clientobj);
    this.clientSevice.addUpdateClient(this.clientobj).subscribe((res: ApiResponsemodel) => {
      if (res.result) {
        
        this.clientobj = new Client();
        this.displayEditDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Client Added Successfully' });
        this.loadClient();
      } else {
        alert(res.message);
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Something went wrong' });
      }
    });
  }
  confirmDelete(clientId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this client?',
      header: 'Confirm Deletion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onDeleteClient(clientId);
      }
    });
  }

  onDeleteClient(clientid: number) {
    this.clientSevice.deleteClientbyId(clientid).subscribe((res: ApiResponsemodel) => {
      if (res.result) {
        this.loadClient();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Client Deleted Successfully' });

      } else {
        alert(res.message);
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Something went wrong' });
      }
    });
  }
}
