import { Component, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  providers: [ ]
})
export class ImageListComponent {
   @Input() childImages;

  constructor() { }

}
