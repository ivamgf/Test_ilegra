import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getFilms: any;  
  title_films: any;

  constructor(
    public http: Http
  ) { }

  ngOnInit() {
  }

  onGetFilms() {
    return this.http.get(`http https://swapi.co/api/films/`)
    .pipe(map(data => data.json()))
    .subscribe(
        data => this.getFilms = data,    
        error => alert(error),
        () => this.title_films = this.getFilms.title,
     );
     
  }

}
