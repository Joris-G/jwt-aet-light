import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewProcessPage } from './new-process.page';

describe('NewProcessPage', () => {
  let component: NewProcessPage;
  let fixture: ComponentFixture<NewProcessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
