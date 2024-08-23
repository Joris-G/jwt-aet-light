import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { ButtonsBoxComponent } from './_components/buttons-box/buttons-box.component';
import { ChronoHeaderComponent } from './_components/chrono-header/chrono-header.component';
import { CurrentStepComponent } from './_components/current-step/current-step.component';
import { ListStepComponent } from './_components/list-step/list-step.component';
import { ProcessService } from '../_services/process.service';
import { Chrono, ChronoStep, Process, TimeType } from '../_interfaces/process';
import { ChronoService } from '../_services/chrono.service';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    AsyncPipe,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ListStepComponent,
    ButtonsBoxComponent,
    ChronoHeaderComponent,
    CurrentStepComponent,
  ],
})
export class ChronoPage {
  // processService = inject(ProcessService);
  chronoService = inject(ChronoService);
  processService = inject(ProcessService);
  process: Process;
  isStarted$ = this.chronoService.isStarted$;
  chrono: Chrono;
  currentStep: ChronoStep;
  constructor() {
    this.process = this.processService.currentProcess;
    this.chrono = this.chronoService.currentChrono;
    this.currentStep = this.chronoService.currentChronoStep;
  }

  onUpdateCurrentStep(updatedStep: ChronoStep) {
    this.chronoService.updateChronoStep(updatedStep);
  }

  buttonBoxClick(clickType: 'start' | 'stop' | 'next') {
    switch (clickType) {
      case 'start':
        this.chronoService.startChrono();
        break;
      case 'stop':
        this.chronoService.stopChrono();
        break;
      case 'next':
        this.chronoService.nextStep();
        break;
      default:
        break;
    }
  }
}
