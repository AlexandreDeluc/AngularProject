import { Component, Input, OnInit } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-beer-display',
  template: `
    <div>
    <h2>{{ beer.name }}</h2>
      <img src="{{ beer.image_url }}" alt="">
    </div>
  `,
  styles: [
  ]
})
export class BeerDisplayComponent implements OnInit {
@Input() beer?: Beer
  constructor() { }

  ngOnInit(): void {
  }

}
