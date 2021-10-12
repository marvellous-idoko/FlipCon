import { Component, OnInit } from '@angular/core';
import { PoissonService } from '../poisson.service';

@Component({
  selector: 'app-pay-loan',
  templateUrl: './pay-loan.component.html',
  styleUrls: ['./pay-loan.component.css']
})
export class PayLoanComponent implements OnInit {

  constructor(private s:PoissonService) { }

  ngOnInit() {
  }
  tht:any
  re():void{
    this.t = true
    this.s.payloan()
    .subscribe(t=>
      {
        this.to= true
        this.t = false

        this.tht = t
        console.info(this.tht)
      })
  }
  t = false; to = false
}
