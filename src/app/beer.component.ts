import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from './beer.model';
import { BeerService } from './beer.service';

@Component({
  selector: 'beer-beer',
  template: `
    <div *ngFor="let beerUnit of beers$ | async">
      <beer-beer-display 
      [beer]="beerUnit">   
      </beer-beer-display>
    </div>
  `,
  styles: [
  ]
})
export class BeerComponent implements OnInit {
beers$: Observable<Beer[]> = this.beerservice.getbeers()
  constructor(private beerservice: BeerService) { }

  ngOnInit(): void {
  }

}
