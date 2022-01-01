import { Component, Input, OnInit } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-beer-display',
  template: `
    <h2>{{ beer.id }} {{ beer.name }}</h2>
    <p>{{ beer.tagline }}</p>
      <img src="{{ beer.image_url }}" alt="">
    <p>Since {{ beer.first_brewed }}</p>
    <button [routerLink]="['/contacts', beer.id, 'edit']">Details</button>


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
