import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LaunchFilterService } from './launch-filter.service';

describe('LaunchFilterService', () => {
  let service: LaunchFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(LaunchFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
