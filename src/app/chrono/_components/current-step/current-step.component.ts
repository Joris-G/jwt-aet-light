import { Component, EventEmitter, inject, Input, Output, OnInit } from '@angular/core';
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
  IonSegment, IonButtons,
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ChronoStep, TimeType } from 'src/app/_interfaces/process';
import { StepDurationInSecondsPipe } from 'src/app/_pipes/step-duration-in-seconds.pipe';

export const NVA_TYPES: { value: TimeType; viewValue: string }[] = [
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
@Component({
  selector: 'app-current-step',
  templateUrl: './current-step.component.html',
  styleUrls: ['./current-step.component.scss'],
  standalone: true,
  imports: [IonButtons,
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
    ReactiveFormsModule
  ],
})
export class CurrentStepComponent implements OnInit {
  private fb = inject(FormBuilder)
  form: FormGroup;
  nvaTypes = NVA_TYPES;

  // @Input({ required: true })
  // isStarted: boolean;

  @Input({ required: true })
  currentStep: ChronoStep;

  @Input()
  timer: Date | null;

  @Output() currentStepEmmiter = new EventEmitter<ChronoStep>();


  @Output()
  buttonClick: EventEmitter<'start' | 'stop' | 'next' | 'pause'> = new EventEmitter();


  ngOnInit() {
    this.form = this.fb.group({
      description: ['', Validators.required],
      timeType: ['', Validators.required]
    });

    this.form.valueChanges.subscribe((value) => {
      console.log("value change ");
      this.currentStep.description = value.description;
      this.currentStep.timeType = value.timeType;
    });
  }
  onStartClick() {
    this.buttonClick.emit('start');
  }
  onPauseClick() {
    this.buttonClick.emit('pause');
  }
  onStopClick() {
    this.buttonClick.emit('stop');
  }
  onNextClick() {
    if (this.form.valid) {
      this.currentStepEmmiter.emit(this.currentStep);
      // this.buttonClick.emit('next');
      this.form.reset(null, { emitEvent: false });
    }
  }

  measureTime(type: TimeType) {
    this.currentStep.timeType = type;
    // this.currentStepEmmiter.emit(this.currentStep);
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
