import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoissonService } from '../poisson.service';

@Component({
  selector: 'app-sterpay',
  templateUrl: './sterpay.component.html',
  styleUrls: ['./sterpay.component.css']
})
export class SterpayComponent  implements OnInit {

  ngOnInit(){
  }
  constructor(private s:PoissonService,private r:Router){ }
  @Input () amt
  @Input () refNo
  @Input () nameOfDep
  @Input () nameOfRec
  @Input () accoutNoR
  @Input () accoutNoD
  @Input () bankAcct
  show:Boolean = false;
  // ' + user['nod'] +
  // '/' + user['aod'] +
  // '/' + user['aor'] +
  // '/' + user['nor'],
  pol:any;sho:Boolean = false;
  check(){
    if(this.nameOfRec || this.accoutNoR == null){
      
    }

    this.s.sav(this.amt,this.refNo,
      {nod:this.nameOfDep,
      aod: this.accoutNoD,
      aor:this.accoutNoR,
      nor:this.nameOfRec
      },this.bankAcct).subscribe(po=>{
        this.pol = po;
        this.sho = true
      })
     
  }
  mov(qwe){
    this.r.navigateByUrl('account_balance')
  }
}
