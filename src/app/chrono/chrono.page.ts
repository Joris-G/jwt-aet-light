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
  IonCol, IonSpinner
} from '@ionic/angular/standalone';
import { ButtonsBoxComponent } from './_components/buttons-box/buttons-box.component';
import { ChronoHeaderComponent } from './_components/chrono-header/chrono-header.component';
import { CurrentStepComponent } from './_components/current-step/current-step.component';
import { ListStepComponent } from './_components/list-step/list-step.component';
import { ProcessService } from '../_services/process.service';
import { Chrono, ChronoStep, Process, TimeType } from '../_interfaces/process';
import { ChronoService } from '../_services/chrono.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
  standalone: true,
  imports: [IonSpinner,
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
  chronoService = inject(ChronoService);
  processService = inject(ProcessService);

  process: Process;
  chrono: Chrono;
  // currentStep: ChronoStep;
  currentStep$: Observable<ChronoStep> = this.chronoService.currentChronoStep$;
  isStarted$ = this.chronoService.isStarted$;
  elapsedTime$ = this.chronoService.elapsedTime$;

  constructor() {
    const startDate = new Date();
    console.log(`chronoPage construit à  ${startDate.toLocaleTimeString()}`);
    this.process = this.processService.currentProcess;
    this.chrono = this.chronoService.currentChrono;
    // this.currentStep$ = this.chronoService.currentChronoStep$;
    // this.isStarted$.subscribe((started) => console.log(started))
    // this.elapsedTime$.subscribe((time) => {
    //   console.log('elapsedTime : ', time);
    // });
  }




  onUpdateCurrentStep(updatedStep: ChronoStep) {
    console.log(updatedStep);
    this.chronoService.updateStep(updatedStep);
    this.chronoService.nextStep();
  }

  buttonBoxClick(clickType: 'start' | 'stop' | 'next' | 'pause') {
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
