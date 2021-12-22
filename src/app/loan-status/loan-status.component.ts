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

}
