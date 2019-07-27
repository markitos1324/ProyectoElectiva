import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFullScreenPage } from './image-full-screen.page';

describe('ImageFullScreenPage', () => {
  let component: ImageFullScreenPage;
  let fixture: ComponentFixture<ImageFullScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFullScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFullScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
