import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateReferanceComponent } from './tempate-referance.component';

describe('TempateReferanceComponent', () => {
  let component: TempateReferanceComponent;
  let fixture: ComponentFixture<TempateReferanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateReferanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateReferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
