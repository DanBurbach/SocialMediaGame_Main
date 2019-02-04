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

  getVideo(keyword:string){
    this.search.getByKeyword(keyword).subscribe(response => {
      this.videos = response.json();
      this.videos = Array.of(this.videos);
      console.log(this.videos);
    });
  }
}
