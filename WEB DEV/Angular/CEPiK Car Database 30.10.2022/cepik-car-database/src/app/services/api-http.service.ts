import { Constants } from '../config/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiHttpService {
  constructor( private http: HttpClient ){};

  public get(url: string, options?: any){
    return this.http.get(Constants.API_PROXY_ENDPOINT + url, options);
  }
}
