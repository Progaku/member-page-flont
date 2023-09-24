import { Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MypageComponent} from './mypage/mypage.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mypage', component: MypageComponent },
  {
    path: '**',
    redirectTo: "/login"
  }
];
