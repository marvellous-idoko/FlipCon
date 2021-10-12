import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PoissonService } from '../poisson.service';

@Component({
    selector: 'btmsheet',
    templateUrl: './btmsheet.html',
    styleUrls: ['./loan-details.component.css']
  })
  export class BottomSheetOverviewExampleSheet implements OnInit {
    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,private ps:PoissonService,private route: ActivatedRoute) {}
    getLoanDetails(){
       console.info("hyuuuuuuuu")
       this.ps.gh()
       .subscribe(ff=>{
           this.lok = ff[0]
        console.log(this.lok)

       })       
    }
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
    lok
    ngOnInit(){
                this.getLoanDetails()
    }
  }
  