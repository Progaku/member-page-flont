import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';

import { MemberDetail, MemberDetailInitial } from '@api/member-detail.service';
import { ItemListComponent } from '@internal/components/item-list/item-list.component';
import { MemberListItemInitial } from '@api/member-list.service';
import { TABLET_THRESHOLD_WIDTH } from '@shared/constants/breakpoint';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, ImageModule, ItemListComponent],
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  memberDetail: MemberDetail = MemberDetailInitial;

  /** 現在の画面幅 */
  currentWindowWidth = window.innerWidth;

  ngOnInit(): void {
    const resolverData = this.activatedRoute.snapshot.data;
    this.memberDetail = resolverData['memberDetail'];
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  get imageWidth(): string {
    if (this.currentWindowWidth > TABLET_THRESHOLD_WIDTH) {
      return '400';
    } else {
      return '250';
    }
  }

}
