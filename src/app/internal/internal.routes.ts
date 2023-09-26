import { Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { MypageComponent } from './mypage/mypage.component';

export const routes: Routes = [
  { path: 'mypage', component: MypageComponent },
  {
    path: 'members',
    component: MemberListComponent,
  },
];
