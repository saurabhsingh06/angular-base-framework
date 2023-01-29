import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-framework';
  config = {
    sidenavWidth: "200"
  }

  constructor(
    private appService: AppService
  ) {}
}
