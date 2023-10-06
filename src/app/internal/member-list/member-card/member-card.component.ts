import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';

import {
  MemberListItem,
  MemberListItemInitial,
} from '@api/member-list.service';
import { ItemListComponent } from '@internal/components/item-list/item-list.component';
import { TABLET_THRESHOLD_WIDTH } from '@shared/constants/breakpoint';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ImageModule,
    ChipModule,
    ItemListComponent,
  ],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input({ required: true }) memberInfo: MemberListItem = MemberListItemInitial;

  /** 現在の画面幅 */
  currentWindowWidth = window.innerWidth;

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  get imageWidth(): string {
    if (this.currentWindowWidth > TABLET_THRESHOLD_WIDTH) {
      return '250';
    } else {
      return '150';
    }
  }
}
