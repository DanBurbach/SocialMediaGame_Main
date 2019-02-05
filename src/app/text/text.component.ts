import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TextApiService } from '../text-api.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
   providers: [ TextApiService ]
})

export class TextComponent {
   texts: any[]=null;

  constructor(private textApiPosts: TextApiService) { }


  showTextPosts(search: string) {
    this.textApiPosts.getTextPost(search).subscribe(response => {
        this.texts = response.json();
    })

  }
}
