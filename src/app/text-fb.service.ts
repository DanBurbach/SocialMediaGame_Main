
import { Injectable } from '@angular/core';
import { TextPost } from './Models/text-post';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TextFBService {
  texts: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.texts = af.list('texts');
  }
  addText(newText: TextPost) {
    this.texts.push(newText);
  }
}
