import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';

import { MemberDetail, MemberDetailInitial } from '@api/member-detail.service';
import { MemberListItemInitial } from '@api/member-list.service';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, ImageModule],
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  memberDetail: MemberDetail = MemberDetailInitial;

  ngOnInit(): void {
    const resolverData = this.activatedRoute.snapshot.data;
    this.memberDetail = resolverData['memberDetail'];
  }

  protected readonly MemberListItemInitial = MemberListItemInitial;
}
