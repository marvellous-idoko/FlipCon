import { DOCUMENT } from '@angular/common';
import { Component, Output, EventEmitter, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent {

  constructor(@Inject (DOCUMENT) private d:Document) { }
  @Output() ok:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Input() text:string;
  clicked(event: Boolean){
    this.d.getElementById('se').style.display='none'
    this.ok.emit(true);
  }
   click(event: Boolean){
    this.d.getElementById('se').style.display='none'
    this.ok.emit(false);
  }

}
