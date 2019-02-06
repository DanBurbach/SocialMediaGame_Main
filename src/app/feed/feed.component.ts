import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { TextFBService } from '../text-fb.service';
import { TextPost } from '../Models/text-post';
import { ImageFBService } from '../image-fb.service';
import { ImagePost } from '../Models/image-post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [TextFBService, ImageFBService]
})
export class FeedComponent implements OnInit{
  texts: FirebaseListObservable<any[]>;
  images: FirebaseListObservable<any[]>;
  constructor(private textFBService: TextFBService, private imageFBService: ImageFBService) { }

  ngOnInit(){
    this.texts = this.textFBService.getTexts();
    this.images = this.imageFBService.getImages();
  }

}
