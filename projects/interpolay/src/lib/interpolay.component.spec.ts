import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolayComponent } from './interpolay.component';

describe('InterpolayComponent', () => {
  let component: InterpolayComponent;
  let fixture: ComponentFixture<InterpolayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
