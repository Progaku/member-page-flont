import { Routes } from '@angular/router';
import {memberListResolver} from '@internal/resolver/member-list.resolver';
import { MemberListComponent } from './member-list/member-list.component';
import { MypageComponent } from './mypage/mypage.component';
import {MemberDetailComponent} from '@internal/member-detail/member-detail.component';
import {memberDetailResolver} from '@internal/resolver/member-detail.resolver';

export const routes: Routes = [
  { path: 'mypage', component: MypageComponent },
  {
    path: 'members',
    component: MemberListComponent,
    resolve: { memberList: memberListResolver },
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent,
    resolve: { memberDetail: memberDetailResolver },
  },
];
