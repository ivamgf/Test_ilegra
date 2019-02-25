import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { AppService } from '../../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-film1',
  templateUrl: './film1.component.html',
  styleUrls: ['./film1.component.scss'],
  providers: [Http]
})
export class Film1Component implements OnInit {
  getFilm1: any;

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnFilm1 = this.httpAppService.onGetFilm1()
    .subscribe(
      data => this.getFilm1 = data,
      error => alert(error),
      () => ( console.log(this.getFilm1) )
 );
  }

}
