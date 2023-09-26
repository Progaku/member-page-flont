import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

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

  /** ログアウト */
  onClickLogoutButton(): void {
    this.toastService.success('ログアウトしました');
  }
}
