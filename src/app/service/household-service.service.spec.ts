import { TestBed } from '@angular/core/testing';

import { HouseholdServiceService } from './household-service.service';

describe('HouseholdServiceService', () => {
  let service: HouseholdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseholdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
