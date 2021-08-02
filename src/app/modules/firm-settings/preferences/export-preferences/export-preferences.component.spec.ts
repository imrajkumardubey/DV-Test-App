import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPreferencesComponent } from './export-preferences.component';

describe('ExportPreferencesComponent', () => {
  let component: ExportPreferencesComponent;
  let fixture: ComponentFixture<ExportPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
