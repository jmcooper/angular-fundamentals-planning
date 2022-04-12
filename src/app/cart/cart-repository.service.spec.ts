import { TestBed } from '@angular/core/testing';

import { CartRepositoryService } from './cart-repository.service';

describe('CartRepositoryService', () => {
  let service: CartRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
