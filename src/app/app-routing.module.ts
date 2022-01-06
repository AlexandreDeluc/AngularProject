import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailBeerComponent } from './detail-beer.component';
import { BeerResolver } from './beer.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path:'beer/:id', component: DetailBeerComponent,resolve: {id: BeerResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
