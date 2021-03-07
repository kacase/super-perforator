import { TestBed } from '@angular/core/testing';

import { SuperPerforatorService } from './super-perforator.service';

describe('SuperPerforatorService', () => {
  let service: SuperPerforatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperPerforatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
