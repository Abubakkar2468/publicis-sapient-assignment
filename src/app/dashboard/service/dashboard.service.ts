import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }


  getPrograms(obj: any = null): Observable<object> {
    let params = '';
    params += (obj.launchYear) ? `&launch_year=${obj.launchYear}` : '';
    params += (obj.successfullLaunch) ?
    `&launch_success=${(obj.successfullLaunch && obj.successfullLaunch === 'True') ? true : false }` : '';
    params += (obj.successfullLanding) ?
    `&land_success=${(obj.successfullLanding && obj.successfullLanding === 'True') ? true : false }` : '';
    const url = `https://api.spacexdata.com/v3/launches?limit=100${params}`;
    return this.http.get(url);
  }

}
