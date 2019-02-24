import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Film7Component } from './film7.component';

describe('Film7Component', () => {
  let component: Film7Component;
  let fixture: ComponentFixture<Film7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Film7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Film7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
