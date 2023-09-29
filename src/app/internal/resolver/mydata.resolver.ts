import { ResolveFn } from '@angular/router';
import { MyData, MydataService } from '@api/mydata.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const mydataResolver: ResolveFn<MyData> = (
  _route,
  _state,
  mydataService: MydataService = inject(MydataService),
): Observable<MyData> => {
  return mydataService.getMyData();
};
