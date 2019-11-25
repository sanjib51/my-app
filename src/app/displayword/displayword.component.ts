import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'


@Component({
  selector: 'app-displayword',
  templateUrl: './displayword.component.html',
  styleUrls: ['./displayword.component.css']
})
export class DisplaywordComponent implements OnInit {
words:object;
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getWord().subscribe(data=>{
      this.words=data;
      console.log(this.words);
    })
  }

}
