import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCTopNavComponent } from './vctop-nav.component';

describe('VCTopNavComponent', () => {
  let component: VCTopNavComponent;
  let fixture: ComponentFixture<VCTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
