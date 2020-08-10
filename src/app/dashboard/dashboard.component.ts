import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public launches;

  constructor() { }

  ngOnInit(): void {

  }

  onLaunchesChange(data) {
    this.launches = data;
  }


}
