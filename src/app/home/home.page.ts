import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { addOutline, settingsOutline, timerOutline } from 'ionicons/icons';

type menuItem = {
  path: string
  icon: string
  menuName: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonIcon, RouterLink, IonCardContent, IonCard, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage {
  public menuItems: menuItem[] = [{
    icon: 'add-outline',
    path: '/process/new',
    menuName: 'NOUVEAU PROCESS'
  }, {
    icon: 'timer-outline',
    path: '/new-chrono',
    menuName: 'NOUVELLE MESURE'
  }, {
    icon: 'settings-outline',
    path: '/options',
    menuName: 'PARAMETRES'
  }]
  constructor() {
    addIcons({ addOutline, timerOutline, settingsOutline });
  }

}
