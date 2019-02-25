import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: Http
  ) { }
  onGetFilms() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/', options)
    .pipe(map(data => data.json()));
  }

  onGetFilm1() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/1/', options)
    .pipe(map(data => data.json()));
  }

  onGetFilm2() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/2/', options)
    .pipe(map(data => data.json()));
  }

  onGetFilm3() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/3/', options)
    .pipe(map(data => data.json()));
  }

  onGetFilm4() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/4/', options)
    .pipe(map(data => data.json()));
  }

  onGetFilm5() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/5/', options)
    .pipe(map(data => data.json()));
  }

  onGetFilm6() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/6/', options)
    .pipe(map(data => data.json()));
  }

  onGetFilm7() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/films/7/', options)
    .pipe(map(data => data.json()));
  }

  onGetPlanets() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/planets/', options)
    .pipe(map(data => data.json()));
  }

  onGetPlanet2() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/planets/2/', options)
    .pipe(map(data => data.json()));
  }

  onGetPlanet3() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('https://swapi.co/api/planets/3/', options)
    .pipe(map(data => data.json()));
  }
}
