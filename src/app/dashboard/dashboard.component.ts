import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public launches;
  public homeTitle = 'SpaceX Universal';

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
  this.setSEO();
  }
  
  setSEO(){
    this.title.setTitle(this.homeTitle);
    this.meta.addTags([
      {name: 'keywords', content: 'This is spacex project with Server Side Render via Angular Universal'},
      {name: 'description', content: 'This is spacex project with Server Side Render via Angular Universal'},
      {name: 'robots', content: 'index, spacex'}
    ]);
  }

  onLaunchesChange(data) {
    this.launches = data;
  }


}
