import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInstallerComponent } from './app-installer.component';

describe('AppInstallerComponent', () => {
  let component: AppInstallerComponent;
  let fixture: ComponentFixture<AppInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInstallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
