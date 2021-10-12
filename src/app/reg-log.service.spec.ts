import { TestBed } from '@angular/core/testing';

import { RegLogService } from './reg-log.service';

describe('RegLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegLogService = TestBed.get(RegLogService);
    expect(service).toBeTruthy();
  });
});
