import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { pixabayApi } from './api-keys';

@Injectable()
export class ImageApiService {

  constructor(private http: Http) { }


  getImagePost(search: string) {
    return this.http.get(`https://pixabay.com/api/?key=${pixabayApi.apiKey}&q=${search}&image_type=photo`)
  }
}
