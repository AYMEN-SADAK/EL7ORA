import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessPage } from './mess.page';

describe('MessPage', () => {
  let component: MessPage;
  let fixture: ComponentFixture<MessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
