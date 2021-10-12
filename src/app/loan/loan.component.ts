import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { RegLogService } from '../reg-log.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PoissonService } from '../poisson.service';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
})
export class LoanComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private ls: PoissonService, private fb: FormBuilder, private l: Location, private s: RegLogService, private r: Router) { }
  goback() {
    this.l.back();
  }
  move(qwe) {
    this.r.navigateByUrl('login')              
  } 
  ngOnInit() {
    this.chkLog();
    // this.checkBVN()
  }
  addressForm = this.fb.group({
    reason: [null, Validators.required],
    summary: [null, Validators.required],
    bvn: [null, Validators.compose([
      Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
    type: [null, Validators.required],
    duration: [null, Validators.required],
    amount: [null, Validators.required],

  });
  sho = false; show = false; bvnn:{}; sjo:Boolean = false; gh = false
    cf = JSON.parse(localStorage.getItem("user"))

  checkBVN(){

   if(this.cf['bvn'] != null && this.cf['verified'] !== true)
     this.gh = true
   
 }
  hg(){
    this.d.getElementById('lok').style.display = "none"

  }
  types = [
    { name: '25%' },
    { name: '24%' },
    { name: '23%' },
    { name: '22%' },
    { name: '21%' },
    { name: '20%' },
    { name: '15%' },
    { name: '10%' },
    { name: '5%' },
  ];
  durations = [
    { name: '1 year' },
    { name: '2 years' },
    { name: '3 years' },
    { name: '4 years' },
    { name: '5 years' },
    { name: '6 years' },
    { name: '7 years' },
    { name: '8 years' },
    { name: '9 years' },
    { name: '10 years' },
  ];

  chkLog() {
    if (this.cf == null || '') 
      this.r.navigateByUrl('login');
  
}
  onSubmit() {
    this.d.getElementById('loader').classList.add('show')
    this.ls.loan(this.addressForm.value).subscribe(s => {
      var r = confirm('successfully submitted' + "\n" + "This is your Loan ID" + "\n" + s['loanId'])
      if (r == true) this.r.navigateByUrl('loanstatus')
      this.r.navigateByUrl('loanstatus')
    })
  }
}
