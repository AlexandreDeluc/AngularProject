import { Component, Input, OnInit } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-beer-display',
  template: `
  <div id="block">
    <h2>{{ beer.id }}. {{ beer.name }}</h2>
    <p>{{ beer.tagline }}</p>
    <div id="biere">
      <img src="{{ beer.image_url }}" alt="">
      <p>Since {{ beer.first_brewed }}</p>
      <button [routerLink]="['/contacts', beer.id, 'edit']">Details</button>
    </div>
  </div>


  `,
  styles: [
    '*{font-family: sans-serif;}',
    '#block {flex-direction: column; margin-left: 30px; margin-bottom: 45px;}',
    '#biere {text-align: center;}',
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