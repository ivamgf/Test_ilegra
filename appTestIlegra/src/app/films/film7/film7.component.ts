import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { AppService } from '../../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-film7',
  templateUrl: './film7.component.html',
  styleUrls: ['./film7.component.scss']
})
export class Film7Component implements OnInit {
  getFilm7: any;

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnFilm7 = this.httpAppService.onGetFilm7()
    .subscribe(
      data => this.getFilm7 = data,
      error => alert(error),
      () => ( console.log(this.getFilm7) )
 );
  }

}
