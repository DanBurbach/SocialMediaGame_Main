import { Component, Input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { TextPost } from '../Models/text-post';
import { TextFBService } from '../text-fb.service';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css'],
  providers: [ TextFBService ]
})
export class TextListComponent {
   @Input() childTexts;

  constructor(private textApiPosts: TextFBService) { }

  saveText(textPost: string){
    let newTextToSave: TextPost = new TextPost(textPost);
    console.log(newTextToSave);
    this.textApiPosts.addText(newTextToSave);
  }

}
