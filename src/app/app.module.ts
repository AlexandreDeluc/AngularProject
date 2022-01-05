import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer.component';
import { BeerDisplayComponent } from './beer-display.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerSearchComponent } from './beer-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailBeerComponent } from './detail-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerDisplayComponent,
    BeerSearchComponent,
    DetailBeerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
