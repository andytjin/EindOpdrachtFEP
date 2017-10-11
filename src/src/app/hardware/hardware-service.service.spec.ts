import { TestBed, inject } from '@angular/core/testing';

import { HardwareServiceService } from './hardware-service.service';

describe('HardwareServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardwareServiceService]
    });
  });

  it('should be created', inject([HardwareServiceService], (service: HardwareServiceService) => {
    expect(service).toBeTruthy();
  }));
});
