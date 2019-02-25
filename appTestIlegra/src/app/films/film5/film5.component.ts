import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';
import { AppService } from '../../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-film5',
  templateUrl: './film5.component.html',
  styleUrls: ['./film5.component.scss']
})
export class Film5Component implements OnInit {
  getFilm5: any;

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnFilm1 = this.httpAppService.onGetFilm5()
    .subscribe(
      data => this.getFilm5 = data,
      error => alert(error),
      () => ( console.log(this.getFilm5) )
 );
  }

}
