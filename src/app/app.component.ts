import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { LoaderComponent } from './_components/loader/loader.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonApp, IonRouterOutlet, LoaderComponent, FormsModule],
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  isLoading: boolean = true;
  loaderMessages: string[] = [
    'Chargement des données...',
    'Initialisation de l\'application...',
    'Connexion au serveur...',
    'Préparation de l\'interface...',
    'Presque prêt...'
  ];


  ngOnInit() {
    this.router.navigate([''])
    // Simuler un chargement pendant 10 secondes
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }


}
