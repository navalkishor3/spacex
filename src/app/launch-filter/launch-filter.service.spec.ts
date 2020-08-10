import { TestBed } from '@angular/core/testing';

import { LaunchFilterService } from './launch-filter.service';

describe('LaunchFilterService', () => {
  let service: LaunchFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
