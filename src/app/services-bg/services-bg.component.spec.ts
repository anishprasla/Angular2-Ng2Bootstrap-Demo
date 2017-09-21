import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBgComponent } from './services-bg.component';

describe('ServicesBgComponent', () => {
  let component: ServicesBgComponent;
  let fixture: ComponentFixture<ServicesBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
