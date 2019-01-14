import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmerridComponent } from './getmerrid.component';

describe('GetmerridComponent', () => {
  let component: GetmerridComponent;
  let fixture: ComponentFixture<GetmerridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmerridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmerridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
