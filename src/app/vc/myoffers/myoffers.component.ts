import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PoissonService } from 'src/app/poisson.service';

@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.component.html',
  styleUrls: ['./myoffers.component.css']
})
export class MyoffersComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d:Document,private s: PoissonService) { }
  i: Observable<any>

  ngOnInit() {
    this.i = this.s.getOffs();

  }
  to=false
  tht
  close(){
  this.to=false
  }
  fund(id: number) {
    console.info(id)
    this.s.fund(id).subscribe(ob => {
      this.to = true
      this.tht = ob['response_content']
      console.info(ob)
    })
  }
}