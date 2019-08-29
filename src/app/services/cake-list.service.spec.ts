import { TestBed } from '@angular/core/testing';

import { CakeListService } from './cake-list.service';

describe('CakeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CakeListService = TestBed.get(CakeListService);
    expect(service).toBeTruthy();
  });
});
