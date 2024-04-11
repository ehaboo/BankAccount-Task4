import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotifyService } from '../../../services/notify-service';
import { OperationModel } from '../../../models/operations-model';
import { OperationService } from '../../../services/operation-service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  public operation = new OperationModel();

  public constructor(
    private operationService: OperationService,
    private router: Router,
    private notifyService: NotifyService
  ) { }


  public async onSubmit() {
    try {
      this.operationService.addOperation(this.operation);
      
      this.notifyService.success("New Operation Successfully Added")
      this.router.navigateByUrl("operations")
    } catch (error: any) {
      this.notifyService.error(error)

    }
  }

}
