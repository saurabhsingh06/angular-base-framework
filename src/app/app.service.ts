import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  $layoutConfig = new BehaviorSubject({
    sidenavWidth: "200px"
  });

  constructor() { }
}
