import { Component, OnInit } from '@angular/core';
import { Student } from '../agboolaj';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myInfo: Student ={
    sid: 991492965,
    sname: 'Joshua Agboola',
    slogin: 'agboolaj',
    scampus: 'Davis Campus',
    Atitle: 'Assignment 3'
  }
  constructor() { }

  ngOnInit() {
  }

}
