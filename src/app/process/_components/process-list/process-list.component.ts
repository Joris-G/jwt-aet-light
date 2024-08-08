import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from 'src/app/_interfaces/process';
import { ProcessService } from 'src/app/_services/process.service';
import { IonCard, IonLabel, IonCardContent, IonList, IonItem, IonCardHeader, IonButton } from "@ionic/angular/standalone";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardHeader, IonItem, IonList, IonCardContent, IonLabel, IonCard, AsyncPipe],
})
export class ProcessListComponent implements OnInit {
  private processService = inject(ProcessService);
  processList$: Observable<Process[]>;
  constructor() {
    this.processList$ = this.processService.processes$;
  }

  ngOnInit() { }
  onNewChronoClick(processIndex: number) {
    this.processService.startNewChrono(processIndex)
  }
}
