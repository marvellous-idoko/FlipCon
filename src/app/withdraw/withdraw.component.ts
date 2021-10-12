import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoissonService } from '../poisson.service';
import { Location } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private s:PoissonService,private fb:FormBuilder, private r:Router,private l:Location) { }
  po = [9,0,6,7]
  
  addressForm = this.fb.group({
    pmtType:[null, Validators.required],
    acct:[null, Validators.required],
    amount: [null, Validators.required]
  })
  z = JSON.parse(localStorage.getItem("user"))
  id;sho:Boolean = false;t;show:Boolean = false;;
  withdraw(){
    console.log('ljojo')
    this.s.withdraw(this.addressForm.get('amount').value).subscribe(e=>{
      this.t = e.msg
      this.show = true

    })
  }

  pmtType = [
    { name: 'Agent', abbreviation: 'agent' },
    { name: 'Bank Account Transfer', abbreviation: 'BAT' },
]
  genID(){
    var d = {
      amt: this.addressForm.get('amount').value,
      witAcct: this.z['account_no'],
      witName:this.z['fullName'],
    }
    this.s.genWitId(d)
    .subscribe(e=>{
      this.id = e;
      this.sho = true
    })
  }
  goback() {
    this.l.back();
  }
  reroute(qwe){
    this.r.navigateByUrl('account_balance')
  }
  
  ngOnInit() {
    if(this.z==null||undefined) this.r.navigateByUrl('login')
  }
  ddee;vrfAccount;vrfMsg;VrfStatus;oko:Boolean
  vrf(){
    this.oko  = false
    if (this.addressForm.get('acct').valid){
   this.s.nameEnq(this.addressForm.get('acct').value).subscribe(e=>{
   if(this.addressForm.get('acct').value!=e['data']['AccountNumber']){
    this.ddee = true
   }else{
     this.vrfAccount = e['data']['AccountNumber'];
     this.vrfMsg = e['message']
     this.VrfStatus = e['data']['status']
     this.oko = true
    }
   })
  }
}
}
