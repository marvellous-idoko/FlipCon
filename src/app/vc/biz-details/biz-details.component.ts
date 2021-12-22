import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PoissonService } from 'src/app/poisson.service';

@Component({
  selector: 'app-biz-details',
  templateUrl: './biz-details.component.html',
  styleUrls: ['./biz-details.component.css']
})
export class BizDetailsComponent implements OnInit {

  constructor(private s:PoissonService,private fb:FormBuilder, private route: ActivatedRoute) { }
i:Observable<any>
state:string
ngOnInit() {
  if(this.route.snapshot.paramMap.get('state') == 'proposals') 
  {
    this.state = 'proposals'
    
  this.i = this.s.offerDet(this.route.snapshot.paramMap.get('id'))
  console.info(this.i)
  this.i.subscribe(c=>{this.tk=c
    console.info(this.tk)
    console.info(c)
  })
}else{

  this.i = this.s.loanDet(this.route.snapshot.paramMap.get('id'))
  console.info(this.i)
  this.i.subscribe(c=>{this.tk=c
    console.info(this.tk)
    console.info(c)
  })
   this.s.incrViews(this.route.snapshot.paramMap.get('id'))
}
}
  tk 
  Form = this.fb.group({
    // id: ['', Validators.required],
    // idd: [null, Validators.required],
    amt: [null, Validators.required],
    msg: [null, Validators.required],
    intRate: [null, Validators.required],
    duration: [null, Validators.required],
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
  durations = [
    { name: '3 Months',value:0.3 },
    { name: '6 Months',value:0.6 },
    { name: '1 year',value:1 },
    { name: '1/2 years',value:1.6 },
    { name: '2 years',value:2 },
    { name: '2 and 1/2 years',value:2.6 },
    { name: '3 years' ,value:3},
    { name: '4 years',value:4 },
    { name: '5 years' ,value:5}
  ];
  onSubmit(){
    console.info(this.tk)
    this.Form.value['id']=this.tk['0']['loanId']
    this.Form.value['idd']=this.tk['0']['acctId']
    console.info(this.Form.value)
    this.s.submitOffer(this.Form.value).subscribe(s=>{
      var tr = confirm('your offer was succefully summtted')
      if(tr == true) return;
      return;
    })
  }

  editProposal(){
    console.info("oo 0jo0")
    
    this.Form.value['id']=this.tk['0']['loanId']
    this.Form.value['idd']=this.tk['0']['acctId']
    console.info(this.Form.value)
    this.s.editProposal(this.Form.value).subscribe(s=>{
      var tr = confirm('your proposal was succefully editted')
      if(tr == true) return;
      return;
    })
  }
}
