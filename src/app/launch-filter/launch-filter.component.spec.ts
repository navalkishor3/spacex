import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchFilterComponent } from './launch-filter.component';
import { LaunchFilterService } from './launch-filter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

// class FakeLaunchFilterService {
//   getLaunches : () => { }
// }
fdescribe('LaunchFilterComponent', () => {
  let component: LaunchFilterComponent;
  let fixture: ComponentFixture<LaunchFilterComponent>;
  const fakeLaunchFilterService = {
    getLaunches : () => { }
  };
  let FakeLocation ={};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchFilterComponent ],
      providers:[
        {
        provide: LaunchFilterService,
        useValue : fakeLaunchFilterService
      }, Router, {
        provide: ActivatedRoute,
        useValue: {
          a :{}
        }
      }, Location]
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
