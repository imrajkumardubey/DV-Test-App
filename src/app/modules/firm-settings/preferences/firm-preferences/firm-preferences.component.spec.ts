import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmPreferencesComponent } from './firm-preferences.component';

describe('FirmPreferencesComponent', () => {
  let component: FirmPreferencesComponent;
  let fixture: ComponentFixture<FirmPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
