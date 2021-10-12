import { Component, OnInit } from '@angular/core';
import { RegLogService } from '../reg-log.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoissonService } from '../poisson.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  ref:string;

    async ngOnInit() {
      this.chkLog();

    //  this.h =  `${this.s.checkLogUser()['email']}`;
  
      this.ref = `${Math.floor(Math.random() * 1000000000)}`;
    }
  goback(){
    this.l.back();
  }
  addressForm = this.fb.group({
    acct: [null, Validators.compose([
      Validators.required, Validators.minLength(10),Validators.maxLength(10)])
    ],
    pmtType: [null, Validators.required],
    amount: [null, Validators.required],
    acctNo:[null, Validators.required],
  })
  vrfMsg; vrfAccount; VrfStatus; ddee:Boolean = false;oko: Boolean
  vrf(){
    this.oko  = false
    if (this.addressForm.get('acct').valid){
   this.pS.nameEnq(this.addressForm.get('acct').value).subscribe(e=>{
   if(this.addressForm.get('acct').value!=e['data']['AccountNumber']){
    this.ddee = true
   }else{
     this.vrfAccount = e['data']['AccountNumber'];
     this.vrfMsg = e['message'];
     this.VrfStatus = e['data']['status'];
     this.oko = true;
    }
   })
  }
}
  show = false;b:any;
  chkAcctNo(){
    if(this.addressForm.get('acctNo').value==null) {this.show = false; return;}
    this.pS.chAcct(this.addressForm.get('acctNo').value)
    .subscribe(s=>{
      if(s['code']==0) this.show = false
      if(s['code']==2) this.show = false
      else{this.b = s;
      this.show = true;
     }
     })
  }
  pmtType = [
    { name: 'Agent', abbreviation: 'agent' },
    { name: 'Bank Account Transfer', abbreviation: 'BAT' },
]
  amounts = [
    { name: '200,000', abbreviation: '200000' },
    { name: '180,000', abbreviation: '100000' },
    { name: '170,000', abbreviation: '170000' },
    { name: '150,000', abbreviation: '150000' },
    { name: '130,000', abbreviation: '130000' },
    { name: '120,000', abbreviation: '120000' },
    { name: '100,000', abbreviation: '100000' },
    { name: '70,000', abbreviation: '70000' },
    { name: '50,000', abbreviation: '50000' },
    { name: '20,000', abbreviation: '20000' },
      { name: '10,000', abbreviation: '10000' },
      { name: '5,000', abbreviation: '5000' },
      { name: '1,000', abbreviation: '1000' }
  ]
  paymentCancel(){
    alert('you cancelled your deposit')
  }
  paymentDone(){
    this.pS.sav(this.addressForm.get('amount').value,this.ref,
    {
      nod:this.s.checkLogUser()['fullName'],
      aod:this.s.checkLogUser()['account_no'],
      aor:this.s.checkLogUser()['account_no'],
      nor:this.s.checkLogUser()['fullName'],
    },this.addressForm.get('acct').value  
    )
  }
  h :any;
 
  e:any
  chkLog(){     
      if(this.s.checkLogUser() == null || undefined) 
  this.r.navigateByUrl('login');
  this.h = this.s.checkLogUser() || JSON.parse(localStorage.getItem("user"));
  console.info(this.h)  
}
tranId
printShow :Boolean = false; notif:Boolean = false;
genID(){
            var rkg = {
              aod:this.s.checkLogUser()['account_no'],
              nod:this.s.checkLogUser()['fullName'],
              amt:this.addressForm.get('amount').value,
              nor:this.b['name'],
              aor:this.addressForm.get('acctNo').value 
          }
          this.pS.genID(rkg)
          .subscribe(r=>{
            
            console.info(r)
            this.tranId = r['transcID'];
            this.printShow = true;
            this.notif = true;
          })
}
genIDp(){
            var rkg = {
              aod:this.s.checkLogUser()['account_no'],
              nod:this.s.checkLogUser()['fullName'],
              amt:this.addressForm.get('amount').value,
              nor:this.s.checkLogUser()['fullName'],
              aor:this.s.checkLogUser()['account_no'] 
          }
          this.pS.genID(rkg)
          .subscribe(r=>{
            console.info(r)
            this.notif = true;
            this.tranId = r['transcID'];      
            this.printShow = true;
          })
}
constructor(private r: Router,
  private l: Location,
  private s:RegLogService,
  private fb:FormBuilder,
  private pS:PoissonService) { }
}
