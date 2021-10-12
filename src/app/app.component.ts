import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations';
import { Router } from '@angular/router';
import { RegLogService } from './reg-log.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]
})
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private d: Document, private r: Router,
   private rs: RegLogService) { }
  z = JSON.parse(localStorage.getItem("user"))
  showo: Boolean;
  kolp() {
    console.info(JSON.parse(localStorage.getItem('lang')))
    if (JSON.parse(localStorage.getItem('lang')) === 'h') {this.showo = true}
    else{
      this.showo = false
    }

  }
  ngOnInit() {
    this.kolp();
    this.chk()
  }
  chk() {
    this.z = JSON.parse(localStorage.getItem("user"))
    if (this.z != null || undefined) {
      this.d.getElementById('v').innerHTML = this.z['fullName'];
      this.d.getElementById('d').innerHTML = this.z['account_no'];
      this.d.getElementById('btn').innerHTML = 'log out';
    } else {
      this.d.getElementById('v').innerHTML = 'You are logged out';
      this.d.getElementById('btn').innerHTML = 'Log in'
      this.d.getElementById('d').innerHTML = '';

    }
  }
  switchE() {
    localStorage.setItem('lang', JSON.stringify('e'));
    this.kolp();
    location.reload();
  }

  switchH() {
    localStorage.setItem('lang', JSON.stringify('h'));
    this.kolp();
    location.reload();  }

  logOut() {
    this.rs.logOut(this.z['account_no'])
    localStorage.clear();
    this.r.navigateByUrl('login')
  }
  goto(r) {
    this.r.navigateByUrl(r);
  }
  title = 'FlipCoin';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
