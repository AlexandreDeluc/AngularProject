import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Beer } from './beer.model';
import { BeerService } from './beer.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Beer> {
  constructor(private contactService: BeerService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Beer> {
    const id = route.paramMap.get('id')

    if (id) {
      return this.contactService.get(id)
    } else {
      return EMPTY;
    }
  }
}
