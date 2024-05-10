import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
SearchText:string=""

@Output()
OnSearchEvent: EventEmitter<string> = new EventEmitter<string>();

@ViewChild('searchinput') searchEl: ElementRef;
onSearchInput(){
  this.OnSearchEvent.emit(this.SearchText);
}

updateSearchText(){
  this.SearchText = this.searchEl.nativeElement.value;
  this.OnSearchEvent.emit(this.SearchText);
}
}
