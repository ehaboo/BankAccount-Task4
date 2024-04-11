import { Component, Input, OnInit } from '@angular/core';
import { OperationModel } from '../../../models/operations-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  


  @Input() 
  public operation:OperationModel; 

  
}
