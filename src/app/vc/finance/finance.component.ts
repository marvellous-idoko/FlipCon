import { Component, OnInit } from '@angular/core';
import { PoissonService } from 'src/app/poisson.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor(private s:PoissonService) { }
a$;b$;c$;d$
  ngOnInit() {
  this.a$ = this.s.noOfLoansCompleted()
  this.b$ = this.s.noOfLoansUnpaid()
  this.c$ = this.s.noOfProposals()
  this.d$ = this.s.amountInvested()
  }


}
