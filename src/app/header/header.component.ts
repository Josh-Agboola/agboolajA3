import { Component, OnInit } from '@angular/core';
import { Student } from '../agboolaj';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
