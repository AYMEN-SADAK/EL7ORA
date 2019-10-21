import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanPage } from './woman.page';

describe('WomanPage', () => {
  let component: WomanPage;
  let fixture: ComponentFixture<WomanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
