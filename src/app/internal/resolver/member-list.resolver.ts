import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Observable } from 'rxjs';

import { MemberListItem, MemberListService } from '@api/member-list.service';

export const memberListResolver: ResolveFn<MemberListItem[]> = (
  _route,
  _state,
  memberListService: MemberListService = inject(MemberListService),
): Observable<MemberListItem[]> => {
  return memberListService.getMemberList();
};
