import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Test } from '../models/test.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData:Test = new Test();
  @Output()
  inpValueChangeEmitter:EventEmitter<Test> = new EventEmitter();
  
  @Output()
  formSubmitEmitter:EventEmitter<Test> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.formSubmitEmitter.emit(this.formData);
    this.formData = new Test();
    this.onInpValueChange();
  }

  onInpValueChange(){
    this.inpValueChangeEmitter.emit(this.formData);
  }
}