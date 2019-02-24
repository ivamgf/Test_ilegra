import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {
    path: '',
        redirectTo: 'home',
        pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'nav',
      component: NavComponent
  },
  {
      path: 'planets',
      component: PlanetsComponent
  },
  {
      path: 'film1',
      component: Film1Component
  },
  {
      path: 'film2',
      component: Film2Component
  },
  {
      path: 'film3',
      component: Film3Component
  },
  {
      path: 'film4',
      component: Film4Component
  },
  {
      path: 'film5',
      component: Film5Component
  },
  {
      path: 'film6',
      component: Film6Component
  },
  {
      path: 'film7',
      component: Film7Component
  },
  {
      path: 'about',
      component: AboutComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
