import { TestBed } from '@angular/core/testing';

import { InterpolayService } from './interpolay.service';

describe('InterpolayService', () => {
  let service: InterpolayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpolayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
