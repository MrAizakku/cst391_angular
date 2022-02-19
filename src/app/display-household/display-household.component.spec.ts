import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHouseholdComponent } from './display-household.component';

describe('DisplayHouseholdComponent', () => {
  let component: DisplayHouseholdComponent;
  let fixture: ComponentFixture<DisplayHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHouseholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
