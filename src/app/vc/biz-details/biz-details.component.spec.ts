import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizDetailsComponent } from './biz-details.component';

describe('BizDetailsComponent', () => {
  let component: BizDetailsComponent;
  let fixture: ComponentFixture<BizDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
