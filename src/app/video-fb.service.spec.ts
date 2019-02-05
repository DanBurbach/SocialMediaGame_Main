import { TestBed, inject } from '@angular/core/testing';

import { VideoFbService } from './video-fb.service';

describe('VideoFbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoFbService]
    });
  });

  it('should ...', inject([VideoFbService], (service: VideoFbService) => {
    expect(service).toBeTruthy();
  }));
});
