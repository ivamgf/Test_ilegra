import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';
import { AppService } from '../../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-film3',
  templateUrl: './film3.component.html',
  styleUrls: ['./film3.component.scss']
})
export class Film3Component implements OnInit {
  getFilm3: any;

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnFilm3 = this.httpAppService.onGetFilm3()
    .subscribe(
      data => this.getFilm3 = data,
      error => alert(error),
      () => ( console.log(this.getFilm3) )
 );
  }

}
