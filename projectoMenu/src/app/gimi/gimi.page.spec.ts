import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GimiPage } from './gimi.page';

describe('GimiPage', () => {
  let component: GimiPage;
  let fixture: ComponentFixture<GimiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GimiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GimiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
