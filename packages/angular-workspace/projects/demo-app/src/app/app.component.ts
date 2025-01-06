import { TestComponent } from 'angular-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<lib-test></lib-test>',
  imports: [TestComponent],
})
export class AppComponent {
  title = 'demo';
}
