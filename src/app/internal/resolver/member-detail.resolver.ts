import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Observable } from 'rxjs';

import { MemberDetail, MemberDetailService } from '@api/member-detail.service';

export const memberDetailResolver: ResolveFn<MemberDetail> = (
  route,
  _state,
  memberDetailService: MemberDetailService = inject(MemberDetailService),
): Observable<MemberDetail> => {
  return memberDetailService.getMemberDetail(route.params['id']);
};
