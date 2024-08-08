import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { InitChronoFormComponent } from './_components/init-chrono-form/init-chrono-form.component';
import { Router } from '@angular/router';
import { ProcessService } from '../_services/process.service';
import { Chrono, Process } from '../_interfaces/process';
import { Observable } from 'rxjs';
import { ChronoService } from '../chrono/_services/chrono.service';

@Component({
  selector: 'app-init-chrono',
  templateUrl: './init-chrono.page.html',
  styleUrls: ['./init-chrono.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, InitChronoFormComponent]
})
export class InitChronoPage {
  @Input()
  set processId(id: string) {
    console.log(id);
    this.process = this.processService.processList[Number(id) - 1];
    console.log(this.process);
  }
  private chronoService = inject(ChronoService);
  private router = inject(Router);
  private processService = inject(ProcessService);
  process: Process;

  // ngOnInit() {
  //   // this.process = this.processService.currentProcess
  // }
  onFormSubmit(chrono: Chrono) {
    this.chronoService.setCurrentChrono(chrono)
    this.router.navigate(['/chrono'])
  }

}
