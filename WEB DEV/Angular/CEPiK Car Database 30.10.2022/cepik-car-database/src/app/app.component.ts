import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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
    carData: any;
    listaWojewodztw: any;
    queryDate: string = '';

    constructor(private api: ApiHttpService) {
      let date = new Date();

      function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      date.setFullYear( date.getFullYear() - randomNumber(0,2));
      date.setMonth(randomNumber(1, 13));
      date.setDate(randomNumber(1, 29));

      this.queryDate = date.toISOString().split('T')[0];
      this.queryDate = this.queryDate.split('-').join('');
    }
    downloadData(wojID?: string) {
      axios.get('http://localhost:3000/pojazdy', {params: {wojID: wojID, dataOd: this.queryDate}}).then(data =>{
        this.carData = data;
        this.carData = this.carData.data.data;
      })
    }
    ngOnInit() {
        this.api.get('/slowniki/wojewodztwa').subscribe(data =>{
          this.listaWojewodztw = data;
          this.listaWojewodztw = this.listaWojewodztw.data.attributes['dostepne-rekordy-slownika'];
        });
    }
}


/*
  java -jar swagger-codegen-cli.jar generate -i https://api.cepik.gov.pl -l typescript-angular -o /Desktop/Programmin'/2022/WEB DEV/Angular/CEPiK Car Database 30.10.2022/cepik-car-database/src/app/API --additional-properties npmName=@gov/cepik-api,snapshot=true,ngVersion=13.0.0

  java -jar swagger-codegen-cli.jar generate -i https://api.cepik.gov.pl -l typescript-angular -o /cepik-car-database/src/app/API --additional-properties npmName=@gov/cepik-api,snapshot=true,ngVersion=13.0.0

  java -jar swagger-codegen-cli.jar generate -i https://api.angular.schule/swagger.json -l typescript-angular -o /test-api --additional-properties npmName=@angular-schule/book-monkey-api,snapshot=true,ngVersion=5.0.0

  java -jar swagger-codegen-cli.jar generate -i https://api.cepik.gov.pl -l typescript-angular -o /test-api --additional-properties npmName=@gov/cepik-api,snapshot=true
*/
