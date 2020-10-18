import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private spacexApi = environment.API_URL;

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
    const url = `${this.spacexApi}/launches?limit=100${params}`;
    return this.http.get(url);
  }

}
