import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessListPage } from './process-list.page';

describe('ProcessListPage', () => {
  let component: ProcessListPage;
  let fixture: ComponentFixture<ProcessListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
