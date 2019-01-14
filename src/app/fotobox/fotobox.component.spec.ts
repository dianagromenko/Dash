import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoboxComponent } from './fotobox.component';

describe('FotoboxComponent', () => {
  let component: FotoboxComponent;
  let fixture: ComponentFixture<FotoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
