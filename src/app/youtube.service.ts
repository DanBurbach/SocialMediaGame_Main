import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { youtubeAPI} from  './api-keys';

@Injectable()
export class YoutubeService {

  constructor(private http: Http) { }

  getByKeyword(keyword: string) {return this.http.get(`https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=${youtubeAPI.apiKey}`)
  }
}
