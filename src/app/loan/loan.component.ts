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
    { name: '3 Months',value:0.3 },
    { name: '6 Months',value:0.6 },
    { name: '1 year',value:1 },
    { name: '1/2 years',value:1.6 },
    { name: '2 years',value:2 },
    { name: '2 and 1/2 years',value:2.6 },
    { name: '3 years' ,value:3},
    { name: '4 years',value:4 },
    { name: '5 years' ,value:5}
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
