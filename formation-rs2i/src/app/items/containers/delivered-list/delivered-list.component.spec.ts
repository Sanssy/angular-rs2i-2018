import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredListComponent } from './delivered-list.component';

describe('DeliveredListComponent', () => {
  let component: DeliveredListComponent;
  let fixture: ComponentFixture<DeliveredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
