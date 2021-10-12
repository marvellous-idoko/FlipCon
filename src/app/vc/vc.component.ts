import { Component, OnInit } from '@angular/core';
import { PoissonService } from '../poisson.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-vc',
  templateUrl: './vc.component.html',
  styleUrls: ['./vc.component.css']
})
export class VCComponent implements OnInit {

  constructor(private s:PoissonService,private l: Location,
     private fb:FormBuilder, private r:Router) { }
  e:any;

  addressForm = this.fb.group({
    id: [null, Validators.required],
    idd: [null, Validators.required],
    amt: [null, Validators.required],
    msg: [null, Validators.required],
    intRate: [null, Validators.required],
    years: [null, Validators.required],
  });
  intRates = [
    { name: '25%' },
    { name: '24%' },
    { name: '23%' },
    { name: '22%' },
    { name: '21%' },
    { name: '20%' },
    { name: '15%' },
    { name: '10%' },
    { name: '5%' },
  ] ;
   years = [
    { name: '1 year' },
    { name: '2 years' },
    { name: '3 years' },
    { name: '4 years' },
    { name: '5 years' },
    { name: '6 years' },
    { name: '7 years' },
    { name: '8 years' },
    { name: '9 years' },
    { name: '10 years' },
  ];
 i : any;
  // getSumOffs(){
  //   .subscribe(e=>{
  //     this.i = e;
  //     console.info(this.i)
  //   })
  // }
  ngOnInit() {
    this.e = this.s.loans();
    console.info(this.e)
    this.i = this.s.getOffs();

    // if(JSON.parse(localStorage.getItem("user"))['acctType'] != 'vc')
    // {
    //   var r = confirm('Oops, this is not an investor or Governmenta agency account ')
    //   if (r== true)this.r.navigateByUrl('home')
    //   this.r.navigateByUrl('home')
    // }
  }
  onSubmit(){
    this.s.submitOffer(this.addressForm.value).subscribe(s=>{
      this.e = this.s.loans();
      var tr = confirm('your offer was succefully summtted')
      if(tr == true) return;
      return;
    })
  }
  goback() {
    this.l.back();
  }

}
