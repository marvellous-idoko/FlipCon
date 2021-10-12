import { Component, OnInit,Inject } from '@angular/core';
import { HomeService } from "../home.service";
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
// import {  } from "";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private d:Document,private s: HomeService, private r: Router) { }
view : Boolean = true
  show: Boolean = false;
  // ht(){
  //   this.s.kolw()
  // }
  // yuuyu(w:any){
  //   console.info(w)
  //   this.d.getElementById('yy').style.display = 'none' 
  //     if (w == true) {
  //        localStorage.setItem('lang', JSON.stringify('h'));
  //        this.chk()
  //       }
  //      else {
  //        localStorage.setItem('lang', JSON.stringify('e'));
  //        this.chk()
  //      }
  // }
  // chk() {
  //   var z = JSON.parse(localStorage.getItem("lang"))
  //  if (z == 'e'){
  //   this.d.getElementById('yy').style.display = 'none' 
  //   this.show = false;

  //  }
  // else if (z == 'h'){
  //   this.d.getElementById('yy').style.display = 'none' 
  //   // this.audioObj.play()
  //   this.show = true;
  // }
  //   }
   
o = 'Would like to view this app in hausa'
router(r){
  this.d.getElementById(r).classList.add('reduce')
  this.r.navigateByUrl(r);
}
ol:Boolean
ngOnInit(){
  // var z = JSON.parse(localStorage.getItem("user"))
  // if(z == null||undefined){
  //   this.ol = false 

  // this.r.navigateByUrl('gen');
   
  // }else{
  //   if (z.acctType == 'vc')this.view = false; 
  //   this.ol = true 
  // }
  // this.ht()
  // this.s.koll().subscribe(e=>{
  //   console.info(e)
  // })
  // this.chk();
  // this.audioObj.onload()
//  this.fd
 } 
// audioObj = new Audio('https://firebasestorage.googleapis.com/v0/b/traffickoffensesystem.appspot.com/o/record20210314043436.3gpp?alt=media&token=fa9e99ae-32ea-4315-a8b6-ff32269d63f3');
}
