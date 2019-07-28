import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GISPage } from './gis.page';

describe('GISPage', () => {
  let component: GISPage;
  let fixture: ComponentFixture<GISPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GISPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GISPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
