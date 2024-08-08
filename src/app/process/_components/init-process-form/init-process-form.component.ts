import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonList } from "@ionic/angular/standalone";
import { Process } from 'src/app/_interfaces/process';
import { ProcessService } from 'src/app/_services/process.service';

@Component({
  selector: 'app-init-process-form',
  templateUrl: './init-process-form.component.html',
  styleUrls: ['./init-process-form.component.scss'],
  standalone: true,
  imports: [IonList, ReactiveFormsModule, IonButton, IonInput, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard],
})
export class InitProcessFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  initProcessForm: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private processService = inject(ProcessService);
  constructor() { }
  ngOnInit() {
    this.initProcessForm = this.fb.group({
      partNumber: new FormControl<string>('PN test', Validators.required),
      designation: new FormControl<string>('DES test', Validators.required),
      project: new FormControl<string>('Projet test', Validators.required),
    });
  }

  onSubmit() {
    if (this.initProcessForm.valid) {
      const newProcess: Process = this.initProcessForm.value as Process
      this.processService.initializeNewProcess(this.initProcessForm.value)
        .subscribe(() => {
          this.formSubmit.emit()
        });
    }
  }
}
