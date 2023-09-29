import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface MemberListItem {
  id: number;
  nickname: string;
  iconImageId: string;
  twitterUserId: string | null;
  birthday: Date | null;
  prefectures: string;
  techs: string[];
}

export const MemberListItemInitial: MemberListItem = {
  id: 0,
  nickname: '',
  iconImageId: '',
  twitterUserId: null,
  birthday: null,
  prefectures: '',
  techs: []
};

@Injectable({
  providedIn: 'root'
})
export class MemberListService {
  getMemberList(): Observable<MemberListItem[]> {
    return of([
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
        twitterUserId: 'hikakin',
        birthday: new Date(),
        prefectures: 'ccc',
        techs: ['Python', 'TypeScript', 'Ruby'],
      },
    ]);
  }
}
