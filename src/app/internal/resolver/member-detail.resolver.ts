import { ResolveFn } from '@angular/router';
import {MemberDetail, MemberDetailService} from '@api/member-detail.service';
import {inject} from '@angular/core';
import {Observable} from 'rxjs';

export const memberDetailResolver: ResolveFn<MemberDetail> = (
  route,
  _state,
  memberDetailService: MemberDetailService = inject(MemberDetailService)
): Observable<MemberDetail> => {
  return memberDetailService.getMemberDetail(route.params['id']);
};
