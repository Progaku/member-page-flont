import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MemberListItem } from '@api/member-list.service';

import { MemberCardComponent } from './member-card/member-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent implements OnInit{
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  members: MemberListItem[] = [];

  ngOnInit(): void {
    const resolverData = this.activatedRoute.snapshot.data;
    this.members = resolverData['memberList'];
  }

  toMemberDetail(id: number): void {
    this.router.navigate([`/internal/members/${id}`]).then();
  }
}
