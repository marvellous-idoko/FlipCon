import { TestBed } from '@angular/core/testing';

import { PoissonService } from './poisson.service';

describe('PoissonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoissonService = TestBed.get(PoissonService);
    expect(service).toBeTruthy();
  });
});
