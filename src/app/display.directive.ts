import { Output, EventEmitter,ElementRef, Component } from '@angular/core';

@Component({
  selector: '[app-display]',
  templateUrl: './display.Directive.html',
})
export class DisplayDirective {

  // constructor() { }
  @Output() ok:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }
  
  clicked(event: Boolean){
    this.ok.emit(true);
  }
}
