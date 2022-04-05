import { Component } from '@angular/core';
import { Test } from './models/test.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadingTestItem:Test = new Test();
  testsList:Test[] = [];

  inpValueChangeSubscriber(event:Test){
    this.loadingTestItem = event;
  }

  formSubmitSubscriber(event:Test){
    this.testsList.push(event);
  }
}
