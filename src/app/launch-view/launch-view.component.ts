import { Component, OnInit, Input } from '@angular/core';
import {Launch} from '../dashboard/launch.model';

@Component({
  selector: 'app-launch-view',
  templateUrl: './launch-view.component.html',
  styleUrls: ['./launch-view.component.scss']
})
export class LaunchViewComponent implements OnInit {
  @Input() launch: Launch;
  constructor() { }

  ngOnInit(): void {
  }

}
