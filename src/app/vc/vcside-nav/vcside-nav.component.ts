import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcside-nav',
  templateUrl: './vcside-nav.component.html',
  styleUrls: ['./vcside-nav.component.css']
})
export class VCSideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 u = JSON.parse(localStorage.getItem("user"))
}
