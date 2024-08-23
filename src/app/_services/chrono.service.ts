import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  interval,
  map,
  startWith,
  switchMap,
} from 'rxjs';
import {
  Chrono,
  ChronoStep,
  InitChrono,
  InitChronoStep,
  TimeType,
} from '../_interfaces/process';

@Injectable({
  providedIn: 'root',
})
export class ChronoService {
  chrono = new Subject<Chrono>();
  currentChrono: Chrono;
  currentChronoStep: ChronoStep;

  initChrono(initChrono: InitChrono) {
    this.currentChrono = initChrono;
    this.updateChrono();
  }

  initChronoStep(initChronoStep: InitChronoStep) {
    this.currentChronoStep = initChronoStep;
    this.currentChrono.chronoSteps = [
      ...this.currentChrono.chronoSteps,
      initChronoStep,
    ];
  }

  updateChronoStep(updatedChronoStep: ChronoStep) {
    this.currentChronoStep = updatedChronoStep;
    const chronoStepIndex = this.currentChrono.chronoSteps.findIndex(
      (chronoStep) => {
        return chronoStep.startTime === this.currentChronoStep.startTime;
      }
    );
    this.currentChrono.chronoSteps[chronoStepIndex];
  }
  updateChrono() {
    this.chrono.next(this.currentChrono);
  }

  setTimeType(type: TimeType) {
    const updatedChronoStep = this.currentChronoStep$.value;
    updatedChronoStep.timeType = type;
    this.currentChronoStep$.next(updatedChronoStep);
  }
  setCurrentChrono(chrono: Chrono) {
    this.currentChrono = chrono;
  }
  // currentChrono: Chrono;
  // steps: Step[] = [];

  private currentChronoStep$ = new BehaviorSubject<ChronoStep>(
    new ChronoStep()
  );

  private chronoState = new BehaviorSubject(false);
  isStarted$: Observable<boolean> = this.chronoState.asObservable();

  private stepStartTime: Date;
  private timerSubscription: Subscription;
  currentStartStepTime: Date;
  elapsedTime = new BehaviorSubject(new Date(0));
  elapsedTime$: Observable<Date>;

  constructor() {
    this.elapsedTime$ = this.chronoState.pipe(
      switchMap((state) => {
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

  addStep() {
    const startStep = this.currentStartStepTime;
    const endStep: Date = new Date();
    const updatedChronoStep = this.currentChronoStep$.value;
    updatedChronoStep.startTime = startStep;
    updatedChronoStep.endTime = endStep;
    const newChronoSteps = [
      ...this.currentChrono.chronoSteps,
      updatedChronoStep,
    ];
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

  stopChrono() {}

  nextStep() {
    this.endCurrentStep();
    this.startNewStep();
  }
  startNewStep() {
    this.currentChronoStep = new ChronoStep();
    this.currentChronoStep$.next(this.currentChronoStep);
  }
  endCurrentStep() {
    this.addStep();
  }
}
