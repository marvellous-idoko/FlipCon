import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PoissonService } from 'src/app/poisson.service';
@Component({
  selector: 'app-myloans',
  templateUrl: './myloans.component.html',
  styleUrls: ['./myloans.component.css','../myoffers/myoffers.component.css']
})
export class MyloansComponent implements OnInit {

  constructor(private s:PoissonService) { }
 i$:Observable<any>
  ngOnInit() {
    this.i$ = this.s.getMyLoans();

  }

}
