import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RarbgService } from './rarbg.service';

describe('RarbgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RarbgService]
    });
  });

  it('should be created', inject([RarbgService], (service: RarbgService) => {
    expect(service).toBeTruthy();
  }));
});
