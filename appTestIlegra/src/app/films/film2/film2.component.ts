import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';
import { AppService } from '../../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-film2',
  templateUrl: './film2.component.html',
  styleUrls: ['./film2.component.scss']
})
export class Film2Component implements OnInit {
  getFilm2: any;

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit( ) {
    const returnFilm2 = this.httpAppService.onGetFilm2()
    .subscribe(
      data => this.getFilm2 = data,
      error => alert(error),
      () => ( console.log(this.getFilm2) )
 );
 
  }

}
