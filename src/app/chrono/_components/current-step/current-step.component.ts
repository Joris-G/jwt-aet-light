import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonTextarea,
  IonRow,
  IonCol,
  IonGrid,
  IonSegmentButton,
  IonSegment,
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ChronoStep, TimeType } from 'src/app/_interfaces/process';
import { StepDurationInSecondsPipe } from 'src/app/_pipes/step-duration-in-seconds.pipe';

@Component({
  selector: 'app-current-step',
  templateUrl: './current-step.component.html',
  styleUrls: ['./current-step.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    StepDurationInSecondsPipe,
    IonSegment,
    IonSegmentButton,
    IonGrid,
    IonCol,
    IonRow,
    IonTextarea,
    IonCardTitle,
    IonLabel,
    IonItem,
    IonButton,
    IonCardContent,
    IonCardHeader,
    IonCard,
    FormsModule,
    DatePipe,
  ],
})
export class CurrentStepComponent {
  public nvaTypes: { value: TimeType; viewValue: string }[] = [
    { value: 'deplacement', viewValue: 'Déplacement' },
    { value: 'attente', viewValue: 'Attente' },
    { value: 'recherche_info', viewValue: 'Recherche Info' },
    { value: 'preparation', viewValue: 'Préparation' },
    { value: 'changement_outils', viewValue: 'Changement Outils' },
    { value: 'maintenance', viewValue: 'Maintenance' },
    { value: 'controle_qualite', viewValue: 'Contrôle Qualité' },
    { value: 'reglage', viewValue: 'Réglage' },
    { value: 'formation', viewValue: 'Formation' },
    { value: 'transport_interne', viewValue: 'Transport Interne' },
    { value: 'communication', viewValue: 'Communication' },
    { value: 'supervision', viewValue: 'Supervision' },
    { value: 'mouvement_inutile', viewValue: 'Mouvement Inutile' },
    { value: 'stockage', viewValue: 'Stockage' },
  ];

  // @Input()
  // isStarted: boolean;
  // isStarted$: Observable<boolean>;
  description = '';
  @Input({ required: true })
  currentStep: ChronoStep;

  @Output() currentStepEmmiter = new EventEmitter<ChronoStep>();

  measureTime(type: TimeType) {
    this.currentStep.timeType = type;
    this.currentStepEmmiter.emit(this.currentStep);
    // Implémentez la logique de mesure de temps ici
  }

  updateCurrentStep() {
    this.currentStepEmmiter.emit(this.currentStep);
  }
  takePhoto() {
    // Implémenter la logique pour prendre une photo instantanée
    console.log('Prendre une photo');
  }
}
