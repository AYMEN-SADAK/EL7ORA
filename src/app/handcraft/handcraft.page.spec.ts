import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandcraftPage } from './handcraft.page';

describe('HandcraftPage', () => {
  let component: HandcraftPage;
  let fixture: ComponentFixture<HandcraftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandcraftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandcraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
