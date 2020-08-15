import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LaunchFilterService } from './launch-filter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launch-filter',
  templateUrl: './launch-filter.component.html',
  styleUrls: ['./launch-filter.component.scss']
})
export class LaunchFilterComponent implements OnInit {
  @Output() launchesChange = new EventEmitter();

  public launchesYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  public isLaunchYear; // show button active
  public isSuccessfulLaunch; // show button active
  public isSuccessfulLand; // show button active
  public launches;

  public filterData = {
    launch_year_enable : '',
    launch_success_enable : '',
    land_success_enable : '',
    launch_year : '',
    launch_success : '',
    land_success : ''
  };

  constructor(private _launchFilterService: LaunchFilterService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getLaunches({ all: true, launch_year_enable: false, launch_success_enable: false, land_success_enable: false });
    console.log(8);
  }

  getLaunches(filterObject) {

    Object.assign(this.filterData, {
      "all": false,
      launch_success_enable: filterObject.launch_success_enable || this.filterData.launch_success_enable,
      land_success_enable: filterObject.land_success_enable || this.filterData.land_success_enable,
      launch_year_enable: filterObject.launch_year_enable || this.filterData.launch_year_enable,
      launch_year: filterObject.launch_year !== undefined ? filterObject.launch_year : this.filterData.launch_year,
      launch_success: filterObject.launch_success !== undefined ? filterObject.launch_success : this.filterData.launch_success,
      land_success: filterObject.land_success !== undefined ? filterObject.land_success : this.filterData.land_success
    });
    this._launchFilterService.getLaunches(this.filterData)
      .subscribe((data) => {
        this.launches = data;
        this.launchesChange.emit(this.launches);
      });

    const urlParam = { limit: 100 };

    if (this.filterData.launch_year_enable) {
      Object.assign(urlParam, { launch_year: this.filterData.launch_year });
      this.isLaunchYear =  this.filterData.launch_year;
    }
    if (this.filterData.launch_success_enable) {
      Object.assign(urlParam, { launch_success: this.filterData.launch_success });
      this.isSuccessfulLaunch = this.filterData.launch_success ? 'launchSuccessTrue' : 'launchSuccessFalse';
    }
    if (this.filterData.land_success_enable) {
      Object.assign(urlParam, { land_success: this.filterData.land_success });
      this.isSuccessfulLand = this.filterData.land_success ? 'landSuccessTrue' : 'landSuccessFalse';
    }

    const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: urlParam }).toString();
    this.location.go(url);

  }

}
