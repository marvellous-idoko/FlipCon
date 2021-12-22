import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PoissonService } from '../poisson.service';
import { Location } from '@angular/common';

@Component({
  selector: 'btmsheet',
  templateUrl: './btmsheet.html',
  styleUrls: ['./loan-details.component.css']
})
export class BottomSheetOverviewExampleSheet implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, 
    private l:Location,
    private s: PoissonService, private route: ActivatedRoute) { }
  lok
  getLoanDetails() {

    console.info("hyuuuuuuuu")
    this.s.gh()
      .subscribe(ff => {
        this.lok = ff[0]
        console.log(this.lok['accepted'])

      })
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit() {
    this.getLoanDetails()
  }
  // logic to acceptloan here 
  // @params d: loanID
  acceptLoan(d:string){
    var k = confirm('Are you sure you want to accept the loan')
    if(k == false)return;
    else{
      this.s.acpOff(d).subscribe(e=>{
        alert(e['msg'])
        this.l.back()

        // if(d==true)
        // this.e = this.s.loanHis();
        // this.e = this.s.loanHis();
      })
    }
  }

  // logic to reject loan here 
  // @params d: loanID
  rejectLoan(d:string){
      var k = confirm('Are you sure you want to reject the loan')
      if(k == false)return;
    else{
        this.s.rejOff(d).subscribe(e=>{
        
          alert(e['msg'])
         this.l.back()

          // this.e = this.s.loanHis();
          // this.e = this.s.loanHis();
        })
      }
  }
}
