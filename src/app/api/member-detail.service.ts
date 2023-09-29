import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface MemberDetail {
  id: number;
  nickname: string;
  iconImageId: string;
  twitterUserId: string | null;
  birthday: Date | null;
  prefectures: string;
  techs: string[];
  participationReason: string;
  hobby: string[];
  description: string;
}

export const MemberDetailInitial: MemberDetail = {
  id: 0,
  nickname: '',
  iconImageId: '',
  twitterUserId: null,
  birthday: null,
  prefectures: '',
  techs: [],
  participationReason: '',
  hobby: [],
  description: ''
}

@Injectable({
  providedIn: 'root'
})
export class MemberDetailService {
  getMemberDetail(id: number): Observable<MemberDetail> {
    return of(
      {
        id: id,
        nickname: 'ニックネーム',
        iconImageId: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        twitterUserId: null,
        birthday: new Date(),
        prefectures: 'あああ',
        techs: ['Python', 'TypeScript', 'Ruby'],
        participationReason: 'あああ',
        hobby: ['ゴルフ', 'マンガ', 'カラオケ'],
        description: '説明'.repeat(5)
      }
    )
  }
}
