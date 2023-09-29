import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Observable } from 'rxjs';

import { MyData, MydataService } from '@api/mydata.service';

export const mydataResolver: ResolveFn<MyData> = (
  _route,
  _state,
  mydataService: MydataService = inject(MydataService),
): Observable<MyData> => {
  return mydataService.getMyData();
};
