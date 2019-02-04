import { TestBed, inject } from '@angular/core/testing';

import { TextApiService } from './text-api.service';

describe('TextApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextApiService]
    });
  });

  it('should be created', inject([TextApiService], (service: TextApiService) => {
    expect(service).toBeTruthy();
  }));
});
