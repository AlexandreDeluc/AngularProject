import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BeerService } from './beer.service';
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Component({
  selector: 'beer-beer-search',
  template: `
    <div>
      <label for="beer-search">Recherche</label>
      <input id="beer-search" [formControl]="searchInputCtrl">
    </div>
  `,
  styles: [
  ]
})
export class BeerSearchComponent implements OnInit {
  searchInputCtrl = new FormControl();

  constructor(private beerservice: BeerService) { }

  ngOnInit(): void {
    this.searchInputCtrl.valueChanges
      .pipe(
        map(x => x.trim()),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(
        value => {
          this.beerservice.search(value)
        }
      )
  }
}
