import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error, promise} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api: string = 'https://formspree.io/f/mjvpzlwv';

  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'});
  }
}
