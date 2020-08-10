import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchFilterComponent } from './launch-filter.component';

describe('LaunchFilterComponent', () => {
  let component: LaunchFilterComponent;
  let fixture: ComponentFixture<LaunchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
