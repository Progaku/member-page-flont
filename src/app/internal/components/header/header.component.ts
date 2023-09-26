import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toastService: ToastService = inject(ToastService);
  router: Router = inject(Router);

  /** メンバー一覧 */
  onClickMemberButton(): void {
    this.router.navigate(['/internal/members']).then();
  }

  /** マイページ */
  onClickMyPageButton(): void {
    this.router.navigate(['/internal/mypage']).then();
  }

  /** ログアウト */
  onClickLogoutButton(): void {
    this.toastService.success('ログアウトしました');
    this.router.navigate(['/login']).then();
  }
}
