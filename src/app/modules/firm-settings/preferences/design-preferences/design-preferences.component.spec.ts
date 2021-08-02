import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPreferencesComponent } from './design-preferences.component';

describe('DesignPreferencesComponent', () => {
  let component: DesignPreferencesComponent;
  let fixture: ComponentFixture<DesignPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
