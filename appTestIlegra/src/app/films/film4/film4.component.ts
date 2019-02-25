import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { AppService } from '../../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-film4',
  templateUrl: './film4.component.html',
  styleUrls: ['./film4.component.scss']
})
export class Film4Component implements OnInit {
  getFilm4: any;

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnFilm4 = this.httpAppService.onGetFilm4()
    .subscribe(
      data => this.getFilm4 = data,
      error => alert(error),
      () => ( console.log(this.getFilm4) )
 );
  }

}
