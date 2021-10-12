import { Component, OnInit } from '@angular/core';
import { PoissonService } from '../poisson.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})

export class LoanStatusComponent implements OnInit {

  constructor(private s:PoissonService,private l: Location,) { }
  e:any
  checked = false;
disabled = false;
  ngOnInit(){
    this.e = this.s.loanHis()
  }
  goback() {
    this.l.back();
  }
  acceptLoan(d:any){
    var k = confirm('Are you sure you want to accept the loan')
    if(k == false)return;
    else{
      this.s.acpOff(d).subscribe(e=>{
        var d = confirm(e['a'])
        if(d==true)this.e = this.s.loanHis();
        this.e = this.s.loanHis();
      })
    }
  }
    rejectLoan(d:any){
      var k = confirm('Are you sure you want to reject the loan')
      if(k == false)return;
    else{
        this.s.rejOff(d).subscribe(e=>{
          var d = confirm(e['a'])
          if(d==true)this.e = this.s.loanHis();
          this.e = this.s.loanHis();
        })
      }
  }
}
