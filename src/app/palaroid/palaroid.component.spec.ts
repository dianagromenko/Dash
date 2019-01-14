import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalaroidComponent } from './palaroid.component';

describe('PalaroidComponent', () => {
  let component: PalaroidComponent;
  let fixture: ComponentFixture<PalaroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalaroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalaroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
