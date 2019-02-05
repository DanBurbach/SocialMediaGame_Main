import { TestBed, inject } from '@angular/core/testing';

import { ImageFBService } from './image-fb.service';

describe('ImageFBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageFBService]
    });
  });

  it('should ...', inject([ImageFBService], (service: ImageFBService) => {
    expect(service).toBeTruthy();
  }));
});
