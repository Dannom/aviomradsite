import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tama38Component } from './tama38.component';

describe('Tama38Component', () => {
  let component: Tama38Component;
  let fixture: ComponentFixture<Tama38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tama38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tama38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
