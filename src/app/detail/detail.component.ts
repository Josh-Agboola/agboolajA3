import { Component, OnInit } from '@angular/core';

import { MYSONGS } from '../mySongs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mysongs = MYSONGS;
  goodToShow: boolean[] = [];
  constructor() { }

  ngOnInit() {
  }

  onClickMe(i){
    if(this.goodToShow[i]){
      this.goodToShow[i] = false;
      console.log("i is true");
    }
    else{
      this.goodToShow[i] = true;
      console.log("i is false");
    }
  }
}
