import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFilters, ILaunchProgram } from 'src/app/common/launch-program.model';
import { LaunchProgramService } from 'src/app/services/launch-program.service';

@Component({
  selector: 'app-programs-home-page',
  styleUrls: ['./programs-home-page.component.scss'],
  templateUrl: './programs-home-page.component.html',
})
export class ProgramsHomePageComponent implements OnInit, OnDestroy {
  public startYear = 2006; // staring year in the added filters
  public launchDetails: ILaunchProgram[] = [];
  public allMissionDetails: ILaunchProgram[];
  // Initial filter value
  public filters: IFilters = {
    landed: null,
    launch: null,
    year: null,
  };

  public subscriptions = new Subscription();

  constructor(private spacexLaunchService: LaunchProgramService , private router: Router , private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.fetchLaunchDetails();
  }

  // fetch launch details without filters
  public fetchLaunchDetails(): void {

    this.route.queryParams.subscribe((params) => {
      this.filters = {
        landed: params.landed,
        launch: params.launch,
        year: params.year,
      };
      this.subscriptions.add(
        this.spacexLaunchService
          .getLaunchDetails(this.filters)
          .subscribe((mission: ILaunchProgram[]) => {
            if (!!mission) {
              this.launchDetails = mission;
            }
          }),
      );
    });
  }

  // counter to get array of years
  // tslint:disable-next-line: typedef
  public counter(i: number) {
    return new Array(i);
  }

  public applyFilters(
    yearFilter: number,
    launchFilter: string,
    landingFilter: string,
  ): void {
    this.allMissionDetails = this.launchDetails; // Saved all mission details to use at time of clear filters
    this.filters = {
      landed: landingFilter,
      launch: launchFilter,
      year: yearFilter,
    };
    this.router.navigate([], {
      queryParams: this.filters,
    });

    // fetch launch details with selected filters
    this.spacexLaunchService
      .getLaunchDetails(this.filters)
      .subscribe((mission: ILaunchProgram[]) => {
        if (!!mission) {this.launchDetails = mission; }
      });
  }

  // Clear call the filters applied and fetch details
  public clearFilters(): void {
    this.router.navigate([], {
      queryParams: this.filters,
    });

    this.launchDetails = this.allMissionDetails;
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
