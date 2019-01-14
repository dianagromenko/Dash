import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidingComponent } from './widing.component';

describe('WidingComponent', () => {
  let component: WidingComponent;
  let fixture: ComponentFixture<WidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
