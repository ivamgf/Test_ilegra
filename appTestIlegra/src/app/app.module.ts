import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PlanetsComponent } from './planets/planets.component';
import { Film1Component } from './films/film1/film1.component';
import { Film2Component } from './films/film2/film2.component';
import { Film3Component } from './films/film3/film3.component';
import { Film4Component } from './films/film4/film4.component';
import { Film5Component } from './films/film5/film5.component';
import { Film6Component } from './films/film6/film6.component';
import { Film7Component } from './films/film7/film7.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PlanetsComponent,
    Film1Component,
    Film2Component,
    Film3Component,
    Film4Component,
    Film5Component,
    Film6Component,
    Film7Component,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
