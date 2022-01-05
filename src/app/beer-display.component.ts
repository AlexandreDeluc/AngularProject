import { Component, Input, OnInit } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-beer-display',
  template: `
  <div id="block">
    <h2>{{ beer.id }}. {{ beer.name }}</h2>
    <p>{{ beer.tagline }}</p>
    <div id="biere">
      <img src="{{ beer.image_url }}" alt="{{ beer.id }}">
      <p>Since {{ beer.first_brewed }}</p>
      <button
      [routerLink]="['/beer', beer.id]">
      Details</button>
    </div>
  </div>


  `,
  styles: [
    '*{font-family: sans-serif;}',
    '#block {flex-direction: column; margin-left: 30px; margin-bottom: 45px;}',
    '#biere {text-align: center;}',
    'h2, p {}font-weight: bold}',
    '#biere img {width: 100px; height: 300px; justify-content: center;}',
    '#biere button {width: 100px;} ',
  ]
})
export class BeerDisplayComponent implements OnInit {
@Input() beer?: Beer
  constructor() { }

  ngOnInit(): void {
  }

}
