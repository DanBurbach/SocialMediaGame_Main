import { TestBed, inject } from '@angular/core/testing';

import { TextFbService } from './text-fb.service';

describe('TextFbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextFbService]
    });
  });

  it('should ...', inject([TextFbService], (service: TextFbService) => {
    expect(service).toBeTruthy();
  }));
});
