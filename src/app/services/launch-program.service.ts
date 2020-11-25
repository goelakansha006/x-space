import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isNil, not } from 'ramda';
import { Observable  } from 'rxjs';
import 'rxjs/add/operator/map';

import { IFilters , ILaunchProgram } from '../common/launch-program.model';

@Injectable({
  providedIn: 'root',
})
export class LaunchProgramService {

  constructor(private http: HttpClient) {}

  public launchDetails: ILaunchProgram[];

  public getLaunchDetails(filter?: IFilters): Observable<ILaunchProgram[]> {
    let baseUrl = 'https://api.spacexdata.com/v3/launches?limit=100';
    if (not(isNil(filter))) {
      const filterParams: IFilters = {
        landed: isNil(filter.landed) ? '' : `&land_success=${filter.landed}`,
        launch: isNil(filter.launch) ? '' : `&launch_success=${filter.launch}`,
        year: filter.year > 0 ? `&launch_year=${filter.year}` : '',
      };

      baseUrl = baseUrl + filterParams.launch + filterParams.landed + filterParams.year;
    }
    return this.http
      .get(baseUrl)
      .pipe()
      .map(this.extractData);
  }

  // tslint:disable-next-line: typedef
  public extractData(res: ILaunchProgram[]) {
    this.launchDetails = res;
    return this.launchDetails;
  }

}
