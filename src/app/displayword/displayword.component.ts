import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'


@Component({
  selector: 'app-displayword',
  templateUrl: './displayword.component.html',
  styleUrls: ['./displayword.component.css']
})
export class DisplaywordComponent implements OnInit {
brews:object;
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data=>{
      this.brews=data;
      console.log(this.brews);
    })
  }

}
