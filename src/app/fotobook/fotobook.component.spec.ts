import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotobookComponent } from './fotobook.component';

describe('FotobookComponent', () => {
  let component: FotobookComponent;
  let fixture: ComponentFixture<FotobookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotobookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
