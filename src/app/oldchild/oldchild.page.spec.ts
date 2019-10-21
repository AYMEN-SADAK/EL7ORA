import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldchildPage } from './oldchild.page';

describe('OldchildPage', () => {
  let component: OldchildPage;
  let fixture: ComponentFixture<OldchildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldchildPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldchildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
