import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = "all"

  onSelectedRadioButtonChanged(){
    //console.log("On Selected Radio button event raised");
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
