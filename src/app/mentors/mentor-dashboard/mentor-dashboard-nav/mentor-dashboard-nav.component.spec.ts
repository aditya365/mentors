import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorDashboardNavComponent } from './mentor-dashboard-nav.component';

describe('MentorDashboardNavComponent', () => {
  let component: MentorDashboardNavComponent;
  let fixture: ComponentFixture<MentorDashboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorDashboardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorDashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
