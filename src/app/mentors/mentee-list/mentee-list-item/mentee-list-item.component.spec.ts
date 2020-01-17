import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeListItemComponent } from './mentee-list-item.component';

describe('MenteeListItemComponent', () => {
  let component: MenteeListItemComponent;
  let fixture: ComponentFixture<MenteeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
