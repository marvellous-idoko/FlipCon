import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { PoissonService } from '../poisson.service';

@Component({
  selector: 'app-non',
  templateUrl: './non.component.html',
  styleUrls: ['./non.component.css']
})
export class NonComponent implements OnInit {

  constructor( private fb: FormBuilder,@Inject(DOCUMENT) private d:Document,private ps:PoissonService) { }

  ngOnInit() {
  }
  c = JSON.parse(localStorage.getItem("user"))
  addressForm = this.fb.group({
    bvn: [null, Validators.required],
  })
  bvn(){
    this.ps.vrfBvn(this.addressForm.get('bvn').value).subscribe(rt=>{
      if(rt['code'] ==1 ){
        this.c.verified = true
        this.c.bvn = this.addressForm.get('bvn').value

        localStorage.setItem('user', JSON.stringify(this.c));
        alert('successfully verified')
      let  cf = JSON.parse(localStorage.getItem("user"))
      }
      else{
        alert('incorrect or incomplete BVN. Check your BVN again')
      }
    })
  }
}
