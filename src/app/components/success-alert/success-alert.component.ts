import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent {

  @Input() message: string = ''; // The dynamic message for the alert
  @Input() type: string = 'success'; // Type of alert ('success', 'danger', etc.)
  @Input() showAlert: boolean = false; // Control visibility of the alert

  closeAlert() {
    this.showAlert = false; // Method to close the alert
  }

}
