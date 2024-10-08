import { Input, Pipe, PipeTransform } from '@angular/core';
import { ChronoStep } from '../_interfaces/process';

@Pipe({
  name: 'stepDurationInSeconds',
  standalone: true,
})
export class StepDurationInSecondsPipe implements PipeTransform {
  @Input()
  transform(step: ChronoStep): number {
    return this.getDurationInSeconds(
      step.endTime || new Date(),
      step.startTime
    );
  }

  getDurationInSeconds(endTime: Date, startTime: Date): number {
    console.log(endTime, startTime);
    return endTime.getTime() - startTime.getTime();
  }
}
