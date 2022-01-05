import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BeerService } from './beer.service';
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Component({
  selector: 'beer-beer-search',
  template: `
    <div>
      <label id="search" for="beer-search">Rechercher :</label>
      <input id="beer-search" [formControl]="searchInputCtrl">
    </div>
  `,
  styles: [
    'div {text-align:center; width: auto; padding:30px;background-color:#f0ecda; border-radius: 10px;;}',
    '#search {font-size: 25px; font-family: sans-serif;}',
    '#beer-search {margin-left: 10px; height: 20px;}'
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
