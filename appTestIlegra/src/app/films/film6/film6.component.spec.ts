import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Film6Component } from './film6.component';

describe('Film6Component', () => {
  let component: Film6Component;
  let fixture: ComponentFixture<Film6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Film6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Film6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
