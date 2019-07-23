import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensumPage } from './pensum.page';

describe('PensumPage', () => {
  let component: PensumPage;
  let fixture: ComponentFixture<PensumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
