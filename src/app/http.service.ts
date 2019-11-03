import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getBeer(){
    return this.http.get('http://sanjib51.pythonanywhere.com/api/v1/word/10/1'); 
   /* return this.http.get('https://api.openbrewerydb.org/breweries'); */

  }
}
