import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonButton, IonItem, IonLabel, IonCardTitle, IonTextarea, IonRow, IonCol, IonGrid, IonSegmentButton, IonSegment } from "@ionic/angular/standalone";
import { interval, Observable, Subscription } from 'rxjs';
import { ChronoService } from '../../_services/chrono.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { TimeType } from 'src/app/_interfaces/process';

@Component({
  selector: 'app-current-step',
  templateUrl: './current-step.component.html',
  styleUrls: ['./current-step.component.scss'],
  standalone: true,
  imports: [AsyncPipe, IonSegment, IonSegmentButton, IonGrid, IonCol, IonRow, IonTextarea, IonCardTitle, IonLabel, IonItem, IonButton, IonCardContent, IonCardHeader, IonCard, FormsModule, DatePipe],
})
export class CurrentStepComponent {
  public nvaTypes: { value: TimeType, viewValue: string }[] = [
    { value: "deplacement", viewValue: "Déplacement" },
    { value: "attente", viewValue: "Attente" },
    { value: "recherche_info", viewValue: "Recherche Info" },
    { value: "preparation", viewValue: "Préparation" },
    { value: "changement_outils", viewValue: "Changement Outils" },
    { value: "maintenance", viewValue: "Maintenance" },
    { value: "controle_qualite", viewValue: "Contrôle Qualité" },
    { value: "reglage", viewValue: "Réglage" },
    { value: "formation", viewValue: "Formation" },
    { value: "transport_interne", viewValue: "Transport Interne" },
    { value: "communication", viewValue: "Communication" },
    { value: "supervision", viewValue: "Supervision" },
    { value: "mouvement_inutile", viewValue: "Mouvement Inutile" },
    { value: "stockage", viewValue: "Stockage" }
  ]
  private chronoService = inject(ChronoService)
  // @Input()
  // isStarted: boolean;
  // isStarted$: Observable<boolean>;
  description = '';
  elapsedTime$: Observable<Date>
  timeType: TimeType;


  constructor() {

    this.elapsedTime$ = this.chronoService.elapsedTime$;
  }
  measureTime(type: TimeType) {
    this.chronoService.setTitmeType(type);
    // Implémentez la logique de mesure de temps ici
  }


  takePhoto() {
    // Implémenter la logique pour prendre une photo instantanée
    console.log('Prendre une photo');
  }

}
