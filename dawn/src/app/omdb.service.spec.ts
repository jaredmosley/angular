import { TestBed, inject } from '@angular/core/testing';

import { OmdbService } from './omdb.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('OmdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [OmdbService]
    });
  });

  it('should be created', inject([OmdbService], (service: OmdbService) => {
    expect(service).toBeTruthy();
  }));
});
