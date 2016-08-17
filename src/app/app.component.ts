import { Component } from '@angular/core';
import { MyService } from './services/sample.service';
import { SubComponent } from './components/subcomponent/subcomponent.component';

@Component({
  selector: 'my-app',
  providers: [MyService],
  templateUrl: '/app/app.template.html',
  directives: [SubComponent]
})
export class MyAppComponent {
  appStatus: string;
  serviceStatus: string;

  constructor(myService: MyService) {
    this.serviceStatus = myService.getMessage();
    this.appStatus = 'Application is working.';
  }
}
