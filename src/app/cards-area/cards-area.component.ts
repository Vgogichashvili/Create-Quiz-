import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../models/test.model';

@Component({
  selector: 'app-cards-area',
  templateUrl: './cards-area.component.html',
  styleUrls: ['./cards-area.component.css']
})
export class CardsAreaComponent implements OnInit {
  @Input()
  testList:Test[] = [];

  hideValidAnswer:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
