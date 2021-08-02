import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPreferencesComponent } from './fund-preferences.component';

describe('FundPreferencesComponent', () => {
  let component: FundPreferencesComponent;
  let fixture: ComponentFixture<FundPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
