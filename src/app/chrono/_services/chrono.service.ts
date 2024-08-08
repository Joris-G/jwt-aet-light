import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Chrono, ChronoStep, TimeType } from 'src/app/_interfaces/process';


@Injectable({
  providedIn: 'root'
})
export class ChronoService {
  setTitmeType(type: TimeType) {
    const updatedChronoStep = this.currentChronoStep$.value;
    updatedChronoStep.timeType = type;
    this.currentChronoStep$.next(updatedChronoStep);
  }
  setCurrentChrono(chrono: Chrono) {
    this.currentChrono = chrono;
  }
  currentChrono: Chrono;
  // steps: Step[] = [];

  private currentChronoStep$ = new BehaviorSubject<ChronoStep>(new ChronoStep());

  private chronoState = new BehaviorSubject(false);
  isStarted$: Observable<boolean> = this.chronoState.asObservable();

  private stepStartTime: Date;
  private timerSubscription: Subscription;
  currentStartStepTime: Date;
  elapsedTime = new BehaviorSubject(new Date(0));
  elapsedTime$: Observable<Date>

  constructor() {
    this.elapsedTime$ = this.chronoState.pipe(
      switchMap(state => {
        if (state) {
          this.stepStartTime = new Date();
          return interval(1000).pipe(
            map(() => {
              const now = new Date();
              const elapsed = now.getTime() - this.stepStartTime.getTime();
              return new Date(elapsed);
            }),
            startWith(new Date(0)) // Optionnel: émettre un zéro initial
          );
        } else {
          return new Observable<Date>(); // Observable vide
        }
      })
    );
  }

  addStep(timeType: TimeType) {
    const startStep = this.currentStartStepTime;
    const endStep: Date = new Date();
    const updatedChronoStep = this.currentChronoStep$.value
    updatedChronoStep.startTime = startStep
    updatedChronoStep.endTime = endStep;
    const newChronoSteps = [...this.currentChrono.chronoSteps, updatedChronoStep];
    this.currentChrono.chronoSteps = newChronoSteps;
  }

  getCurrentChronoStep() {
    return this.currentChronoStep$.value;
  }
  startChrono() {
    this.chronoState.next(true);
    this.currentStartStepTime = new Date();
    // this.isStartedSubject.next(true);
  }



  stopChrono() {

  }

  nextStep() {

  }
}
