import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegLogService } from '../reg-log.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT, Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private r: Router, private s: RegLogService, private fb: FormBuilder, private l: Location) { }

  ngOnInit() { }
  goback() {
    this.l.back();
  }
  addressForm = this.fb.group({
    id: [null, Validators.required],
    pwd: [null, Validators.required]
  })

  parentEvent(t: Boolean) {
    if ( JSON.parse(localStorage.getItem("user"))['acctType'] == 'Lender') {
      this.r.navigateByUrl('VC');
    } else {
      this.r.navigateByUrl('home');
    }
  }
  kll(d: {}) {
    // this.d.getElementById('loader').classList.remove('show');

    if (d['code'] == 1) {
      localStorage.setItem('user', JSON.stringify(d['user']));
      console.info(JSON.parse(localStorage.getItem("user")))
      return;
    }
  }
  t: boolean = false
  login() {
    // this.d.getElementById('loader').classList.add('show');
    this.t = true
    this.s.login(this.addressForm.value).subscribe(d => {
      this.t = false

      if (d['code'] == 0) alert(d['msg'])
      else {
        this.d.getElementById('koo').classList.add('show');
        this.kll(d)
      }
    })
  }
  router(r: string) {
    this.r.navigateByUrl(r)
  }
  text = 'Successfully Signed In';
}
