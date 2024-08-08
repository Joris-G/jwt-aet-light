import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Chrono, ChronoStep, Process } from '../_interfaces/process';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private apiUrl = 'http://your-backend-url/api/processes';  // Remplacez par l'URL de votre backend
  private http = inject(HttpClient);
  private router = inject(Router);
  private processListSubject = new BehaviorSubject<Process[]>([]);
  processes$: Observable<Process[]>;
  private currentProcessSubject = new BehaviorSubject<Process | null>(null)
  currentProcess: Process;
  currentChrono: Chrono;
  processList: Process[] = [];


  addChronoStep(chronoStepToAdd: ChronoStep) {
    const chronoIndex = this.currentProcess.chronos?.findIndex((currChrono) => {
      return currChrono.id == this.currentChrono.id;
    })
    this.currentProcess.chronos[chronoIndex].chronoSteps?.push(chronoStepToAdd);
  }

  addChrono(chronoToAdd: Chrono) {
    this.currentProcess.chronos.push(chronoToAdd);
  }


  initializeNewProcess(process: Process): Observable<boolean> {
    this.addProcess(process);
    this.setCurrentProcess(process);
    return of(true);
  }
  private addProcess(process: Process) {
    const newProcess: Process = process as Process;
    // newProcess.chronos = [];
    this.processList.push(newProcess);

  }

  setCurrentProcess(process: Process) {
    this.currentProcess = process;
  }

  startNewChrono(processIndex: number) {
    this.currentProcessSubject.next(this.processList[processIndex]);
    this.router.navigate(['init-chrono']);
  }
}
