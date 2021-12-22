import { PoissonService } from 'src/app/poisson.service';
import {COMMA, SPACE} from '@angular/cdk/keycodes';
import {Component,OnInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-biz',
  templateUrl: './biz.component.html',
  styleUrls: ['./biz.component.css']
})
export class BizComponent implements OnInit {
  i:Observable<any>
  ngOnInit() {
    console.info(JSON.parse(localStorage.getItem("user"))['acctType'] )
    if (JSON.parse(localStorage.getItem("user"))['acctType'] == 'Business'){

      this.r.navigateByUrl('home')
    }else{

      this.i = this.s.loans();
      this.popul()
    }
  }
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [SPACE, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: {}[] = ['all'];
  // allFruits: string[] = [     'Male', 'Female', 'Lagos',
  //                         'Abia','Abuja','Anambra', 
  //                         'Niger','Nassarrawa','Adamawa', 
  //                         'Kebbi','Abuja','Anambra', 
  //                         'Kwara','ondo','Ogun', 
  //                         'Rivers','Sokoto','Taraba', 
  //                         'Cross River','Gombe','Yobe', 
  //                         'Enugu','Ebonyi','Delta', 
  //                         'Oyo','Benue','Bayelsa', 
  //                          'Plateau','akwa - Ibom',
  //                          'fashion','Agriculture',
  //                         'size medium', 'size - large', 'size small'
  //                         ];

  allFruits: string[] = []
  popul(){
    console.info(this.allFruits)
    
    let i:number;
    for(i=0;i<this.allFrts.length;i++){

      this.allFruits.push(this.allFrts[i]['name'])
    // console.info(this.allFrts[i])
    // console.info(this.allFrts[i]['name'])
    // console.info(this.allFruits)
    }
    // console.info(this.allFruits)
  }
  allFrts :{}[] = [
    {name:'All',type:'offered',value:null},
    {name:'Male',type:'gender',value:'M'},
    {name:'Female',type:'gender',value:'F'},
    {name:'Sexual Status Anonymous',type:'gender',value:'R'},
    {name:'Size of business - 10',type:'size',value:10},
    {name:'interest rate 20%',type:'intRate',value:'20%'},
    {name:'interest rate 10%',type:'intRate',value:'10%'},
    {name:'size of business - 20',type:'size',value:20},
    { name: 'Duration 3 Months',type:'duration',value:0.3 },
    { name: 'Duration 6 Months',value:0.6, type:'duration'},
    { name: 'Duration 1 year',value:1 , type:'duration'},
    { name: 'Duration 1/2 years',value:1.6 , type:'duration'},
    { name: 'Duration 2 years',value:2 , type:'duration'},
    { name: 'Duration 2 and 1/2 years',value:2.6 , type:'duration'},
    { name: 'Duration 3 years' ,value:3, type:'duration'},
    { name: 'Duration 4 years',value:4 , type:'duration'},
    { name: 'Duration 5 years' ,value:5, type:'duration'},
    { name: 'Agricultural Sector' ,value:'Agriculture', type:'industry'}
  ]
  // @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor(@Inject(DOCUMENT) private d:Document,private s:PoissonService,private r:Router) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        // map((fruit: string | null) => fruit = this.allFruits.slice()));
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      if(this.fruits.includes(value)){
        alert('already inlcuded')

      }
      else{
      this.fruits.push(value);

      }

    }

    // Clear the input value
    // event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1)
    }
  }
mrrr:{} = {offered: false || null}
  selected(event: MatAutocompleteSelectedEvent): void {
    // use the selected value to query global array
    let obj = this.allFrts.find(o => o['name'] === event.option.viewValue);
    // push the returned value to create an object and push in into the array to query the server 
    this.mrrr[obj['type']] = obj['value']
    // console.info(this.mrrr)
    this.fruits.push(event.option.viewValue);
   var c = <HTMLInputElement>this.d.getElementById('lide')
   c.value = ''; 
  //  this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => 
      fruit)
  }
  ckj(){
  (this.d.getElementById('btnn') as HTMLButtonElement).removeAttribute('disabled')
  }
  targetedSearch(){
    this.i = this.s.trgtSrch(this.mrrr);
    // console.info(this.i);
    (this.d.getElementById('btnn') as HTMLButtonElement).disabled = true
    this.mrrr = {offered: false || null}
  }
  
}
