import { TestBed, inject } from '@angular/core/testing';

import { EntriesService } from './entries.service';

describe('Entries.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntriesService]
    });
  });

  it('should be created', inject([EntriesService], (service: EntriesService) => {
    expect(service).toBeTruthy();
  }));
});
