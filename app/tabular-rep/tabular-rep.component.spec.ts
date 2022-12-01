/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabularRepComponent } from './tabular-rep.component';

describe('TabularRepComponent', () => {
  let component: TabularRepComponent;
  let fixture: ComponentFixture<TabularRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
