import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchFilterService {

  private _launchesUrl = 'https://api.spacexdata.com/v3/launches?limit=100';


  constructor(private http: HttpClient) { }

  getLaunches(paramData) {
    let params = new HttpParams();


    if (paramData.launch_year_enable){
      params = params.append('launch_year', paramData.launch_year);
    }
    if (paramData.launch_success_enable){
      params = params.append('launch_success', paramData.launch_success);
    }
    if (paramData.land_success_enable ){
      params = params.append('land_success', paramData.land_success);
    }

    return this.http.get(this._launchesUrl,  {params});
  }
}
