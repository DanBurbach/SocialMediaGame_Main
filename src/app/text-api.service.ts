import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TextApiService {

  constructor(private http: Http) { }

  getTextPost(search: string) {
    // //chuck norris
    return this.http.get(`https://api.chucknorris.io/jokes/search?query=${search}`)

     // return this.http.get(`${search}`)
  }

}
