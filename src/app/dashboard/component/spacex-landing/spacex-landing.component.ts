import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'lazysizes';

@Component({
  selector: 'app-spacex-landing',
  templateUrl: './spacex-landing.component.html',
  styleUrls: ['./spacex-landing.component.scss']
})
export class SpacexLandingComponent implements OnInit {

  spacexPrograms = [];
  launchYear = null;
  successfullLaunch = null;
  successfullLanding = null;

  isLoading = false;

  launchOptions = [
    'True',
    'False'
  ];
  launchYearList = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
  ];

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchQueryParam();
  }

  fetchQueryParam() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      if ( params ) {
        this.launchYear = params.launchYear;
        this.successfullLanding = params.successfullLanding;
        this.successfullLaunch = params.successfullLaunch;
        this.fetchSpacexPrograms(params);
      }
    });
  }

  fetchSpacexPrograms(filter: any = null) {
    this.spacexPrograms = [];
    this.isLoading = true;
    this.dashboardService.getPrograms(filter).subscribe((response: any) => {
      this.isLoading = false;
      if (response) {
        this.spacexPrograms = response;
      }
    }, (err) => {
      this.isLoading = false;
      console.log(err);
    });
  }


  onFilterSelection(val, type) {
    if (type === 'year') {
      this.launchYear = val;
    } else if (type === 'launch') {
      this.successfullLaunch = val;
    } else if (type === 'landing') {
      this.successfullLanding = val;
    }
    this.redirect();
  }

  redirect() {
    this.router.navigate([], {
      queryParams: {
        launchYear: this.launchYear,
        successfullLanding: this.successfullLanding,
        successfullLaunch: this.successfullLaunch
      }
    });
  }

}
