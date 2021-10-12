import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  constructor() { }
  @Output() ok:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Input() text:string;
  clicked(event: Boolean){
    this.ok.emit(true);
  }

}
