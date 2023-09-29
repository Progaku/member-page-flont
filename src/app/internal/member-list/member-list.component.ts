import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MemberCardComponent } from './member-card/member-card.component';
import {MemberListItem} from '@api/member-list.service';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent {
  members: MemberListItem[] = [
    {
      id: 1,
      nickname: 'aaa',
      iconImageId:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
      twitterUserId: null,
      birthday: new Date(),
      prefectures: 'aaa',
      techs: ['Python', 'TypeScript', 'Ruby'],
    },
    {
      id: 2,
      nickname: 'bbb',
      iconImageId:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
      twitterUserId: null,
      birthday: new Date(),
      prefectures: 'bbb',
      techs: ['Python', 'TypeScript', 'Ruby'],
    },
    {
      id: 3,
      nickname: 'ccc',
      iconImageId:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
      twitterUserId: null,
      birthday: new Date(),
      prefectures: 'ccc',
      techs: ['Python', 'TypeScript', 'Ruby'],
    },
  ];
}
