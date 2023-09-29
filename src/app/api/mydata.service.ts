import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToastService } from '@shared/services/toast.service';

export interface MyData {
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

export const MyDataInitial: MyData = {
  id: 0,
  nickname: '',
  iconImageId: '',
  twitterUserId: null,
  birthday: null,
  prefectures: '',
  techs: [],
  participationReason: '',
  hobby: [],
  description: '',
};

export interface UpdateMyDataRequest {
  nickname: string;
  twitterUserId: string | null;
  birthday: Date | null;
  prefectures: string;
  techs: string[];
  participationReason: string;
  hobby: string[];
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  toastService: ToastService = inject(ToastService);

  getMyData(): Observable<MyData> {
    return of({
      id: 100,
      nickname: '私',
      iconImageId: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
      twitterUserId: 'hikakin',
      birthday: new Date(),
      prefectures: '東京都',
      techs: ['Python', 'React', 'AWS'],
      participationReason: 'エンジニアになるため',
      hobby: ['アニメ', 'ゲーム', 'マンガ'],
      description: 'あ'.repeat(255),
    });
  }

  updateMyData(data: UpdateMyDataRequest): void {
    this.toastService.success('success update profile');
  }

  updateMyIcon(icon: string): void {
    this.toastService.success('success setting icon');
  }
}
