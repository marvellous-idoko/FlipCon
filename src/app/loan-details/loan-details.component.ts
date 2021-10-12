import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { PoissonService } from '../poisson.service';
import { BottomSheetOverviewExampleSheet } from "./btmsheet";
import { Location } from '@angular/common';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

    
    constructor(private _bottomSheet: MatBottomSheet,private l:Location, private route: ActivatedRoute,private ps:PoissonService) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  lok

  getLoanDetails(){
    this.ps.loanDet(this.route.snapshot.paramMap.get('id'))
    .subscribe(rf=>{
      this.lok =  rf[0]
    })
   }
  ngOnInit() {
   
    this.getLoanDetails()
  }
  goback(){
    this.l.back()
  }

}


// @Component({
//   selector: 'btmsheet',
//   templateUrl: './btmsheet.html',
//   styleUrls: ['./loan-details.component.css']
// })
// export class BottomSheetOverviewExampleSheet {
//   constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

//   openLink(event: MouseEvent): void {
//     this._bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }
