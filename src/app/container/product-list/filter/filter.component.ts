import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input()
AllProd=0

@Input()
InStock=0

@Input()
OutStock=0

@Output()
selectedFilterRadioEvent: EventEmitter<string>=new EventEmitter<string>();

selectedFilterRadioValue:string = 'all';

onRadioFilterChangeChild(){
  this.selectedFilterRadioEvent.emit(this.selectedFilterRadioValue);
}
}
