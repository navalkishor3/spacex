import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchViewComponent } from './launch-view.component';

describe('LaunchViewComponent', () => {
  let component: LaunchViewComponent;
  let fixture: ComponentFixture<LaunchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
