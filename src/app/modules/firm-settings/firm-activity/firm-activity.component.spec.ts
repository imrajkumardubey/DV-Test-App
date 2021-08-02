import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmActivityComponent } from './firm-activity.component';

describe('FirmActivityComponent', () => {
  let component: FirmActivityComponent;
  let fixture: ComponentFixture<FirmActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
