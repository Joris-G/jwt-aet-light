import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonLabel,
  IonButton,
  IonList,
} from '@ionic/angular/standalone';
import { InitChrono } from 'src/app/_interfaces/process';

@Component({
  selector: 'app-init-chrono-form',
  templateUrl: './init-chrono-form.component.html',
  styleUrls: ['./init-chrono-form.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonButton,
    IonLabel,
    IonInput,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonCardHeader,
    IonCard,
    ReactiveFormsModule,
  ],
})
export class InitChronoFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<InitChrono>();
  initChronoForm: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  ngOnInit() {
    this.initChronoForm = this.fb.group({
      name: ['tâche test', Validators.required],
      measureUser: ['chronométreur test', Validators.required],
      rank: [1],
      targetTime: [20],
      worker: ['personne auditée', Validators.required],
      workorder: ['1326644', Validators.required],
    });
  }
  onSubmit() {
    if (this.initChronoForm.valid) {
      const newChrono = this.initChronoForm.value as InitChrono;
      newChrono.chronoSteps = [];
      this.formSubmit.emit(newChrono);
    }
  }
}
