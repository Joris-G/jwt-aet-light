import { Component, Input, OnInit } from '@angular/core';
import { Process } from 'src/app/_interfaces/process';
import { IonCard, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonLabel, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-chrono-header',
  templateUrl: './chrono-header.component.html',
  styleUrls: ['./chrono-header.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonCard]
})
export class ChronoHeaderComponent {
  @Input() process: Process


}
