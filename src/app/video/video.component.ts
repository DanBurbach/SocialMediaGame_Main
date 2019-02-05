import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { YoutubeService} from '../youtube.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [YoutubeService]
})
export class VideoComponent {
  videos: any[]= null;
  constructor(private search: YoutubeService) { }


// gets the API by items
  getVideo(keyword:string){
    this.search.getByKeyword(keyword).subscribe(response => {
      this.videos = response.json().items;
      this.videos = Array.of(this.videos);
      console.log(this.videos);
    });
  }

  getVideoAll(keyword:string){
    this.search.getByKeyword(keyword).subscribe(response => {
      this.videos = response.json();
      this.videos = Array.of(this.videos);
      console.log(this.videos);
    });
  }

  createVideoUrl(){
    alert("Hello does this work!?")
  }
}
