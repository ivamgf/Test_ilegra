import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { AppService } from '../app.service';

export const contentHeaders = new Headers();

contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getFilms: any = [];
  getFilm1: any;
  getFilm2: any;
  getFilm3: any;
  getFilm4: any;
  getFilm5: any;
  getFilm6: any;
  getFilm7: any;
  results: any[];

  constructor(
    private httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
    const returnFilms = this.httpAppService.onGetFilms()
    .subscribe(
      data => this.getFilms = data,
      error => alert(error),
      () => ( console.log(this.getFilms) ),
 );

 const returnFilm1 = this.httpAppService.onGetFilm1()
    .subscribe(
      data2 => this.getFilm1 = data2,
      error => alert(error),
      () => ( console.log(this.getFilm1) )
 );

 const returnFilm2 = this.httpAppService.onGetFilm2()
    .subscribe(
      data3 => this.getFilm2 = data3,
      error => alert(error),
      () => ( console.log(this.getFilm2) )
 );

 const returnFilm3 = this.httpAppService.onGetFilm3()
    .subscribe(
      data4 => this.getFilm3 = data4,
      error => alert(error),
      () => ( console.log(this.getFilm3) )
 );

 const returnFilm4 = this.httpAppService.onGetFilm4()
    .subscribe(
      data5 => this.getFilm4 = data5,
      error => alert(error),
      () => ( console.log(this.getFilm4) )
 );

 const returnFilm5 = this.httpAppService.onGetFilm5()
    .subscribe(
      data6 => this.getFilm5 = data6,
      error => alert(error),
      () => ( console.log(this.getFilm5) )
 );

 const returnFilm6 = this.httpAppService.onGetFilm6()
    .subscribe(
      data7 => this.getFilm6 = data7,
      error => alert(error),
      () => ( console.log(this.getFilm6) )
 );

 const returnFilm7 = this.httpAppService.onGetFilm7()
    .subscribe(
      data8 => this.getFilm7 = data8,
      error => alert(error),
      () => ( console.log(this.getFilm7) )
 );

}  
  
/*
  onGetFilms() {
    return this.http.get(`http https://swapi.co/api/films/`)
    .pipe(map(data => data.json()))
    .subscribe(
        data => this.getFilms = data,    
        error => alert(error),
        //() => this.title_films = this.getFilms.title,
        () => console.log(this.title_films)
     );
     
  }
*/
}
