import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  config = {
    sidenavWidth: "200"
  }

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
  }

}
