import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';
import { AppService } from '../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  getPlanets: any = [];

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnPlanets = this.httpAppService.onGetPlanets()
    .subscribe(
      data => this.getPlanets = data,
      error => alert(error),
      () => ( console.log(this.getPlanets) ),
    );
  }

}
