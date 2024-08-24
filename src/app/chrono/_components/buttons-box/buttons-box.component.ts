import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  ViewDidEnter,
} from '@ionic/angular/standalone';
import { ListStepComponent } from '../list-step/list-step.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buttons-box',
  templateUrl: './buttons-box.component.html',
  styleUrls: ['./buttons-box.component.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    ListStepComponent,
    AsyncPipe,
  ],
})
export class ButtonsBoxComponent {
  @Input({ required: true })
  isStarted$: Observable<boolean>;
  @Output()
  buttonClick: EventEmitter<'start' | 'stop' | 'next' | 'pause'> = new EventEmitter();

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
    this.buttonClick.emit('next');
  }
}
