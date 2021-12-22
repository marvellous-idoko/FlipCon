import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCSideNavComponent } from './vcside-nav.component';

describe('VCSideNavComponent', () => {
  let component: VCSideNavComponent;
  let fixture: ComponentFixture<VCSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
