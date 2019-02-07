import { Injectable } from '@angular/core';
import { VideoPost } from './models/video-post';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class VideoFbService {
  videos: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.videos = database.list('videos');
  }

  addVideo(newVideo: VideoPost) {
    this.videos.push(newVideo);
  }

  getVideos(){
    return this.videos;
  }
}
