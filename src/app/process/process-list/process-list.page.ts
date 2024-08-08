import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProcessListComponent } from '../_components/process-list/process-list.component';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.page.html',
  styleUrls: ['./process-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProcessListComponent]
})
export class ProcessListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
