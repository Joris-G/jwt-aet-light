import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
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
export class ChronoService implements OnDestroy {
  chrono = new Subject<Chrono>();
  currentChrono: Chrono;
  // currentChronoStep: ChronoStep;
  // currentChrono: Chrono;
  // steps: Step[] = [];
  private currentChronoStepSubject = new BehaviorSubject<ChronoStep>(
    new ChronoStep()
  );
  currentChronoStep$: Observable<ChronoStep> = this.currentChronoStepSubject.asObservable();

  private chronoState = new BehaviorSubject(false);
  isStarted$: Observable<boolean> = this.chronoState.asObservable();

  private stepStartTime: Date;
  private timerSubscription: Subscription;
  currentStartStepTime: Date;
  // elapsedTime = new BehaviorSubject(new Date(0));
  elapsedTime$: Observable<Date>;

  constructor() {
    const startDate = new Date();
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
          return EMPTY; // Observable vide
        }
      })
    );
    console.log(`chronoService construit à  ${startDate.toLocaleTimeString()}`);
  }

  startChrono() {
    console.log('startChronoMethode');
    this.chronoState.next(true);
    this.initChrono();

    // console.log("startChrono from chronoService : current step " + this.currentChronoStep);
    // this.isStartedSubject.next(true);
  }

  startNewStep() {
    // Arrête le timer en cours s'il y en a un
    // if (this.timerSubscription) {
    //   this.timerSubscription.unsubscribe();
    // }
    this.chronoState.next(true);
    this.currentStartStepTime = new Date();
    // this.currentChronoStep = ;
    this.currentChronoStepSubject.next(new ChronoStep());
    // console.log("startNewStep : current step " + this.currentChronoStep);
    // Redémarre le timer pour la nouvelle étape
    //  this.elapsedTime$ = interval(1000).pipe(
    //   map(() => {
    //     const now = new Date();
    //     const elapsed = now.getTime() - this.currentStartStepTime.getTime();
    //     return new Date(elapsed);
    //   }),
    //   startWith(new Date(0))
    // );
  }

  initChrono() {
    // this.currentChrono = initChrono;
    this.startNewStep();
    this.updateChrono();

  }

  // initChronoStep(initChronoStep: InitChronoStep) {
  //   this.currentChronoStep = initChronoStep;
  //   this.currentChrono.chronoSteps = [
  //     ...this.currentChrono.chronoSteps,
  //     initChronoStep,
  //   ];
  // }

  // updateChronoStep(updatedChronoStep: ChronoStep) {
  //   this.currentChronoStep = updatedChronoStep;
  //   const chronoStepIndex = this.currentChrono?.chronoSteps.findIndex(
  //     (chronoStep) => {
  //       return chronoStep.startTime === this.currentChronoStep.startTime;
  //     }
  //   );
  //   this.currentChrono.chronoSteps[chronoStepIndex];
  // }
  updateChrono() {
    this.chrono.next(this.currentChrono);
  }

  setTimeType(type: TimeType) {
    const updatedChronoStep = this.currentChronoStepSubject.value;
    updatedChronoStep.timeType = type;
    this.currentChronoStepSubject.next(updatedChronoStep);
  }
  setCurrentChrono(chrono: Chrono) {
    this.currentChrono = chrono;
  }
  updateStep(updatedStep: ChronoStep) {
    this.currentChronoStepSubject.next(updatedStep);
  }

  addStep(stepToAdd: ChronoStep) {
    const newChronoSteps = [
      ...this.currentChrono.chronoSteps,
      stepToAdd
    ];
    this.currentChrono.chronoSteps = newChronoSteps;
  }

  getCurrentChronoStep() {
    return this.currentChronoStepSubject.value;
  }


  stopChrono() {
    this.chronoState.next(false);
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    // console.log("next click current step " + this.currentChronoStep);
  }

  nextStep() {
    this.endCurrentStep();
    this.startNewStep();
  }

  endCurrentStep() {
    const startStep: Date = this.currentStartStepTime;
    const endStep: Date = new Date();
    const updatedChronoStep = this.currentChronoStepSubject.getValue();
    updatedChronoStep.startTime = startStep;
    updatedChronoStep.endTime = endStep;
    this.addStep(updatedChronoStep);
  }







  ngOnDestroy() {
    // Unsubscribe from subscriptions to prevent memory leaks
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
