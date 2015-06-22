import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class GuestList {
  heading = 'Guest list';
  images = [];
  url = 'http://localhost:3000/guests';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.get(this.url).then(response => {
      this.guests = response.content;
    });
  }
}
