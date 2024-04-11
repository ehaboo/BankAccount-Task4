import { Component } from '@angular/core';
import {  OperationService } from '../../../services/operation-service';
import { CommonModule } from '@angular/common';
import { NotifyService } from '../../../services/notify-service';
import { FormsModule } from '@angular/forms';
import { OperationModel } from '../../../models/operations-model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public accountNumber:string; 
  public operations: OperationModel[]; 

  public constructor(
    private operationService: OperationService,
    private notifyService: NotifyService

  ) { }


  public async search(){
    try {
        this.operations = await this.operationService.getOperationsByAccountNumber(this.accountNumber); 
        console.log(this.operations);

        this.accountNumber = ""; 
                  
    } catch (error) {
        this.notifyService.error("Can't get information")
    }
}


}
