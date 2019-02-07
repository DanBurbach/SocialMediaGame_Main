import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { TextFBService } from '../text-fb.service';
import { TextPost } from '../Models/text-post';
import { ImageFBService } from '../image-fb.service';
import { ImagePost } from '../Models/image-post';
import { VideoPost } from '../models/video-post';
import { VideoFbService } from '../video-fb.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [TextFBService, ImageFBService, VideoFbService]
})
export class FeedComponent implements OnInit{
  texts: FirebaseListObservable<any[]>;
  images: FirebaseListObservable<any[]>;
  videos: FirebaseListObservable<any[]>;
  url;
  constructor(private textFBService: TextFBService, private imageFBService: ImageFBService, private videoFBService: VideoFbService ) { }

  ngOnInit(){
    this.texts = this.textFBService.getTexts();
    this.images = this.imageFBService.getImages();
    this.videos = this.videoFBService.getVideos();
  }
}
