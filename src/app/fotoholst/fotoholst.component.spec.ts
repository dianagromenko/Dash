import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoholstComponent } from './fotoholst.component';

describe('FotoholstComponent', () => {
  let component: FotoholstComponent;
  let fixture: ComponentFixture<FotoholstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoholstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoholstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
