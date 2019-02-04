import { Component, Input } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css'],
  providers: [ ]
})
export class TextListComponent {
   @Input() childTexts;

  constructor() { }



}
