import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitChronoPage } from './init-chrono.page';

describe('InitChronoPage', () => {
  let component: InitChronoPage;
  let fixture: ComponentFixture<InitChronoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InitChronoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
