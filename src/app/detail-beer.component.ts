import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Data, ParamMap, Router} from "@angular/router";
import { Beer } from './beer.model';

@Component({
  selector: 'beer-detail-beer',
  template: `
    <div>
      <h1>{{ beer.name }}</h1>
      <p>{{ beer.image_url }}</p>
      <h3>{{ beer.tagline }}</h3>
      <div>
        <ul>
          <li>Since : {{ beer.first_brewed }}</li>
          <li>{{ beer.description }}</li>
          <li>{{ beer.yeast }}</li>
          <li>{{ beer.food_pairing }}</li>
          <li>{{ beer.brewer_tips }}</li>
        </ul>
      </div>
      <button (click)="backToList()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DetailBeerComponent implements OnInit {
beer?:Beer

constructor(route: ActivatedRoute, private router: Router) {
  route.data.subscribe(
      (data:Data) => {
        console.log(data)
        if (data.b) {
          this.beer = data.b
          console.log("this.beer")
        }
      }
  );
}
backToList() {
  this.router.navigate(['']);
}

  ngOnInit(): void {
  }

}
