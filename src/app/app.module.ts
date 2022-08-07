import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingsByValComponent } from './ratings-by-val/ratings-by-val.component';
import { RatingsByRefComponent } from './ratings-by-ref/ratings-by-ref.component';


@NgModule({
  declarations: [
    AppComponent,
    RatingsByValComponent,
    RatingsByRefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
