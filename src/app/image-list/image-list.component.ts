import { Component, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { ImagePost } from '../Models/image-post';
import { ImageFBService } from '../image-fb.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  providers: [ ImageFBService ]
})
export class ImageListComponent {
   @Input() childImages;


  constructor(private imageApiPosts: ImageFBService) { }

  saveImage(imageURL: string, imageTags: string){
    let newImageToSave: ImagePost = new ImagePost(imageURL, imageTags);
    this.imageApiPosts.addImage(newImageToSave);
  }

}
