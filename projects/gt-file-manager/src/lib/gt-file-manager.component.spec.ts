import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleSchedulerComponent } from './ngx-simple-scheduler.component';

describe('NgxSimpleSchedulerComponent', () => {
  let component: NgxSimpleSchedulerComponent;
  let fixture: ComponentFixture<NgxSimpleSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSimpleSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
