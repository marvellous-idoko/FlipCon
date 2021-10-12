import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-chooser]',
  templateUrl: './chooser.directive.html'

})
export class ChooserDirective {

  constructor() { }
  @Input () amt
  @Input () refNo
  @Input () nameOfDep
  @Input () nameOfRec
  @Input () accoutNoR
  @Input () accoutNoD
  @Input () bankAcct

  check(){
    console.info(this.amt)
  }
  show:boolean
  click:boolean
}
