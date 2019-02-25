import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { AppService } from '../../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-film6',
  templateUrl: './film6.component.html',
  styleUrls: ['./film6.component.scss']
})
export class Film6Component implements OnInit {
  getFilm6: any;

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnFilm6 = this.httpAppService.onGetFilm6()
    .subscribe(
      data => this.getFilm6 = data,
      error => alert(error),
      () => ( console.log(this.getFilm6) )
 );
  }

}
