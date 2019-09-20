import { TestBed } from '@angular/core/testing';

import { CakeService } from './cake-list.service';

describe('CakeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CakeService = TestBed.get(CakeService);
    expect(service).toBeTruthy();
  });
});
