import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStartegyComponent } from './create-startegy.component';

describe('CreateStartegyComponent', () => {
  let component: CreateStartegyComponent;
  let fixture: ComponentFixture<CreateStartegyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStartegyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStartegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
