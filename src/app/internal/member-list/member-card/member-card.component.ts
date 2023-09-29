import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';

import {
  MemberListItem,
  MemberListItemInitial,
} from '@api/member-list.service';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule, CardModule, ImageModule, ChipModule],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input({ required: true }) memberInfo: MemberListItem = MemberListItemInitial;
}
