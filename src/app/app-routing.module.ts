import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailBeerComponent } from './detail-beer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path:'beer/:id', component: DetailBeerComponent,resolve: {beer: DetailBeerComponent} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
