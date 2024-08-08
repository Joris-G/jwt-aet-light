import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonSplitPane, IonRouterOutlet, IonCard, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { InitProcessFormComponent } from './_components/init-process-form/init-process-form.component';
import { ProcessListComponent } from './_components/process-list/process-list.component';
import { ProcessService } from '../_services/process.service';
import { Observable } from 'rxjs';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, IonLabel, IonIcon, IonItem, IonCardContent, IonCard, IonRouterOutlet, IonSplitPane, IonContent,
    IonHeader, IonTitle, IonToolbar, CommonModule, InitProcessFormComponent, ProcessListComponent]
})
export class ProcessPage {
  // private processService = inject(ProcessService);
  // isNewProcessCreation$: Observable<boolean>;
  constructor() {
    // this.isNewProcessCreation$ = this.processService.isProcessCreation$;
    addIcons({ addOutline });
  }


}
