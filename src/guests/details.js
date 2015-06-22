import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Guest {
  guest = {};
  url = 'http://localhost:3000/guests/${id}';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.get(this.url).then(response => {
      this.guest = response.content;
    });
  }
}
