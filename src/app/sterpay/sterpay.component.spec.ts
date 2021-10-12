import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SterpayComponent } from './sterpay.component';

describe('SterpayComponent', () => {
  let component: SterpayComponent;
  let fixture: ComponentFixture<SterpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SterpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SterpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
