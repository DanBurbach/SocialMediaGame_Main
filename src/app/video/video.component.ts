import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { YoutubeService} from '../youtube.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [ YoutubeService]
})
export class VideoComponent {
  videos: any[] = null;


  constructor(private video: YoutubeService) { }

  getVideo(keyword: string) {
    this.video.getVideoByKeyword(keyword).subscribe(response => {
      this.videos = response.json();
      console.log(response)
    })
  }


}


export class WeatherComponent {

  infos: any[]=null;
  constructor(private humidity: WeatherApiService) { }

  getHumidity(city: string){
    this.humidity.getByCity(city).subscribe(response => {
      this.infos = response.json();
      console.log(response)
    });
  }
}
