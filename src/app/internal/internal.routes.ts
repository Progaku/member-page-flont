import { Routes } from '@angular/router';

import { MemberDetailComponent } from '@internal/member-detail/member-detail.component';
import { memberDetailResolver } from '@internal/resolver/member-detail.resolver';
import { memberListResolver } from '@internal/resolver/member-list.resolver';
import { mydataResolver } from '@internal/resolver/mydata.resolver';
import { isAuthGuard } from '@shared/guards/is-auth.guard';

import { MemberListComponent } from './member-list/member-list.component';
import { MypageComponent } from './mypage/mypage.component';

export const routes: Routes = [
  {
    path: 'mypage',
    component: MypageComponent,
    canActivate: [isAuthGuard],
    resolve: {
      mydata: mydataResolver,
    },
  },
  {
    path: 'members',
    component: MemberListComponent,
    canActivate: [isAuthGuard],
    resolve: { memberList: memberListResolver },
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent,
    canActivate: [isAuthGuard],
    resolve: { memberDetail: memberDetailResolver },
  },
];
