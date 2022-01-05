import { Component } from '@angular/core';

@Component({
  selector: 'beer-root',
  template: `
  <beer-beer></beer-beer>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'webeer';
}
