import { Constants } from '../config/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiHttpService {
  constructor( private http: HttpClient ){};

  public get(url: string, options?: any){
    console.log('API Service get(): ' + Constants.API_ENDPOINT + url + '\nOptions: ' + options);
    return this.http.get(Constants.LOCAL_HOST + url, options);
  }
}
