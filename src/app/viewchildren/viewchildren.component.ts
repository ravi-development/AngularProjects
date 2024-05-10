import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent {

  @ViewChildren('inputref') inputvalue: QueryList<ElementRef>;

  Show(){
    this.inputvalue.forEach((el) =>{
      console.log(el.nativeElement.value);
    })
  }
}
