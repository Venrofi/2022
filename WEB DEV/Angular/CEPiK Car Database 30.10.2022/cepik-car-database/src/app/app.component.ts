import { Component, OnInit } from '@angular/core';
import{ Constants } from './config/constants';
import { ApiHttpService } from './services/api-http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiHttpService]
})
export class AppComponent implements OnInit{
    title = Constants.TitleOfSite;
    data: any;

    constructor(api: ApiHttpService) {
      // this.data = api.get('https://jsonplaceholder.typicode.com/posts');
      this.data = api.get('https://api.cepik.gov.pl/pojazdy');
      console.log(this.data);
    }
    ngOnInit() {
        console.log(this.title);
    }
}
