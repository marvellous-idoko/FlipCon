import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen',
  templateUrl: './gen.component.html',
  styleUrls: ['./gen.component.css']
})
export class GenComponent implements OnInit {

  constructor(private r: Router) { }

  ngOnInit() {
    var z = JSON.parse(localStorage.getItem("user"))
    if (z != null || undefined)  this.r.navigateByUrl('home');
  }

  router(r){
    this.r.navigateByUrl(r);
  }
}
