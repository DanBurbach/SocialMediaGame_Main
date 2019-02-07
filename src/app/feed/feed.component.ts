import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { TextFBService } from '../text-fb.service';
import { TextPost } from '../Models/text-post';
import { ImageFBService } from '../image-fb.service';
import { ImagePost } from '../Models/image-post';
import { VideoPost } from '../models/video-post';
import { VideoFbService } from '../video-fb.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [TextFBService, ImageFBService, VideoFbService]
  // template: <div [src]="_htmlProperty"></div>
})
export class FeedComponent implements OnInit{
  texts: FirebaseListObservable<any[]>;
  images: FirebaseListObservable<any[]>;
  videos: FirebaseListObservable<any[]>;
  url;
  constructor(private textFBService: TextFBService, private imageFBService: ImageFBService, private videoFBService: VideoFbService, private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.texts = this.textFBService.getTexts();
    this.images = this.imageFBService.getImages();
    this.videos = this.videoFBService.getVideos();
    const videoList = this.videoFBService.getVideos().map(videos => {
      return videos;
    })
    videoList.subscribe(videos => {console.log(videos);
    let tempUrl = videos[0].url;
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(tempUrl);
    this.url = tempUrl

    console.log(this.url);})
  }

  showVideo(id) {
    let url = id;
    let iframe = document.createElement('iframe');
      iframe.width="500px";
      iframe.height="450px";
      iframe.setAttribute("src", url);
      document.getElementById("watch").appendChild(iframe);
  }

  showUrl(url) {
    let show = "src=" + url;
  }
}
