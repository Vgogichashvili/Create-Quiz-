import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../models/test.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  cardItem:Test = new Test();

  @Input()
  hideValidAnswer:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  showAnswerStatus(status:boolean){
    console.log(status);
  }

}
