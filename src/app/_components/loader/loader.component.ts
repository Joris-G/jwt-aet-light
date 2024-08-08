import { Component, Input, OnInit } from '@angular/core';
import { IonProgressBar, IonLoading, IonSpinner } from "@ionic/angular/standalone";
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [IonSpinner, IonLoading, IonProgressBar,],
})
export class LoaderComponent implements OnInit {
  @Input() messages: string[] = [];
  @Input() isLoading: boolean = true;
  activeMessageIndex: number = 0;
  private messageSubscription: Subscription;

  ngOnInit() {
    this.messageSubscription = interval(2000).subscribe(() => {
      this.activeMessageIndex = (this.activeMessageIndex + 1) % this.messages.length;
    });
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
}
