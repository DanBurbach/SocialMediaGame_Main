import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YoutubeService {

  constructor(private http: Http) { }

  getVideoByKeyword(keyword: string) { return
    this.http.get(`https://www.googleapis.com/youtube/v3/${keyword}`)
  }
}
