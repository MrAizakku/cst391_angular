import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHouseholdComponent } from './delete-household.component';

describe('DeleteHouseholdComponent', () => {
  let component: DeleteHouseholdComponent;
  let fixture: ComponentFixture<DeleteHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHouseholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
