import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beer } from './beer.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BeerService {
beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([])
beerApiUrl:string = environment.api_url + 'beers'

  constructor(private http: HttpClient) {
    this.http.get<Beer[]>(this.beerApiUrl)
    .subscribe((beers) => {
      console.log(beers)
      this.beers$.next(beers)
    })
   }

   getbeers(): Observable<Beer[]> {
     return this.beers$
   }

   search(query: string) {
    this.http.get<Beer[]>(
        this.beerApiUrl,
        { params: { beer_name: query }}
    ).subscribe(
        beers => {
            this.beers$.next(beers);
        }
    )
}
}