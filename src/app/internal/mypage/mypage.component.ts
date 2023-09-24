import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    CalendarModule,
    ChipsModule,
    ImageModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent {
  /** ニックネーム */
  nicknameForm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });
  /** X(twitter) */
  twitterUserIdForm = new FormControl<string>('', {
    nonNullable: true,
  });
  /** 誕生日 */
  birthdayForm = new FormControl<Date | null>(null, {
    nonNullable: false,
  });
  /** 都道府県 */
  prefecturesForm = new FormControl<string>('', {
    nonNullable: true,
  });
  /** 技術 */
  techChipForm = new FormControl<string[]>([], {
    nonNullable: true,
  });
  /** 参加理由 */
  participationReasonForm = new FormControl<string>('', {
    nonNullable: true,
  });
  /** 趣味 */
  hobbyForm = new FormControl<string[]>([], {
    nonNullable: true,
  });
  /** 自由記載 */
  descriptionForm = new FormControl<string>('', {
    nonNullable: true,
  });

  formGroup = new FormGroup({
    nickname: this.nicknameForm,
    twitterUserId: this.twitterUserIdForm,
    birthday: this.birthdayForm,
    prefectures: this.prefecturesForm,
    tech: this.techChipForm,
    participationReason: this.participationReasonForm,
    hobby: this.hobbyForm,
    description: this.descriptionForm,
  })
}