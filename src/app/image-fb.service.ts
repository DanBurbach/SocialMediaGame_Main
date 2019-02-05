import { Injectable } from '@angular/core';
import { ImagePost } from './Models/image-post';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ImageFBService {
  images: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.images = af.list('images');
  }
  addImage(newImage: ImagePost) {
    this.images.push(newImage);
  }
}
