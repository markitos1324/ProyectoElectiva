import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelematicsPage } from './telematics.page';

describe('TelematicsPage', () => {
  let component: TelematicsPage;
  let fixture: ComponentFixture<TelematicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelematicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelematicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
