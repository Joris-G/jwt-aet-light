import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { InitProcessFormComponent } from '../_components/init-process-form/init-process-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-process',
  templateUrl: './new-process.page.html',
  styleUrls: ['./new-process.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, InitProcessFormComponent]
})
export class NewProcessPage {

  private router = inject(Router);

  onFormSubmit() {
    this.router.navigate(['init-chrono', { processId: 1 }]);
  }
}
