import { TestBed } from '@angular/core/testing';

import { ProductRepositoryService } from './product-repository.service';

describe('ProductRepositoryService', () => {
  let service: ProductRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
