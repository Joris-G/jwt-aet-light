import { AsyncPipe, DatePipe, DecimalPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { ChronoStep } from 'src/app/_interfaces/process';
import { StepDurationInSecondsPipe } from 'src/app/_pipes/step-duration-in-seconds.pipe';

// export interface Step {
//   timeType: string;
//   startTime: Date;
//   endTime?: Date;
//   duration?: number;
// }

@Component({
  selector: 'app-list-step',
  templateUrl: './list-step.component.html',
  styleUrls: ['./list-step.component.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    DatePipe,
    DecimalPipe,
    NgFor,
    AsyncPipe,
    StepDurationInSecondsPipe,
  ],
})
export class ListStepComponent {
  @Input({ required: true })
  steps: ChronoStep[];
}
