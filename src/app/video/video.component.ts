import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { YoutubeService} from '../youtube.service';
import { VideoPost } from '../models/video-post';
import { VideoFbService } from '../video-fb.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [YoutubeService, VideoFbService]
})
export class VideoComponent {
  videos: any[]= null;
  clickedVideo: null;
  constructor(private search: YoutubeService, private videoFb:VideoFbService) { }


// gets the API by items
  getVideo(keyword:string){
    this.search.getByKeyword(keyword).subscribe(response => {
      this.videos = response.json().items;
      this.videos = Array.of(this.videos);
      console.log(this.videos);
    });
  }

  // getVideoAll(keyword:string){
  //   this.search.getByKeyword(keyword).subscribe(response => {
  //     this.videos = response.json();
  //     this.videos = Array.of(this.videos);
  //     console.log(this.videos);
  //   });
  // }

  watchVideo(info){
    var url = "https://www.youtube.com/embed/" + info;
    var iframe = document.createElement('iframe');
      iframe.width="500px";
      iframe.height="450px";
      iframe.setAttribute("src", url);
      document.getElementById("watch").appendChild(iframe);
    }

  saveVideo(videoId: string, title: string){
   let newVideoToSave: VideoPost = new VideoPost(videoId, title);
   this.videoFb.addVideo(newVideoToSave);
 }
}
