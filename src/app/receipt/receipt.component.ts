import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegLogService } from '../reg-log.service';
import { Location } from '@angular/common';
import { PoissonService } from '../poisson.service';
import { Observable } from 'rxjs';
// import { map } from "rxjs";

import {
  MatTableDataSource
} from '@angular/material';
export interface op {
  nameOfDepostor: string;
  dateOfTransaction: Date;
  account_noOfDepositor: string;
  refNo: string;
  amountDeposited: string;
}
export interface opp {
  dateOfTransaction: Date;
  refNo: string;
  amtWitdrawn: string;
}
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})


export class ReceiptComponent implements OnInit {

  constructor(private r: Router,
    private l: Location,
    private s: RegLogService,
    private pS: PoissonService) { }
    goback(){
      this.l.back();
    }
     ngOnInit() {
    this.chkLog()
  }
  e: any; a: any; aa: op[];aaa: opp[]; private b; private bb;

ss:any;
  chkLog() {
    this.pS.retrAcctBal(this.s.checkLogUser())
    .subscribe(e =>{
      this.a=e
    })
    this.pS.retrCred(this.s.checkLogUser())
    .subscribe(e =>{
      this.aa=e
    })
    this.pS.retrDebit(this.s.checkLogUser())
    .subscribe(e =>{
      this.aaa=e
    })

  }
  displayedColumns: string[] = [
    'dateOfTransaction',
    'nameOfDepostor',
    'account_noOfDepositor',
    'amountDeposited',
    'refNo'
  ];

}
