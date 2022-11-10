import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiHttpService {
  constructor( private http: HttpClient ){};

  public get(url: string, options?: any){
    // Use Proxy endpoint when running app locally:
    // return this.http.get(Constants.API_PROXY_ENDPOINT + url, options);
    return this.http.get(url, options);
  }
}
