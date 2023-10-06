import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { MyData, MydataService } from '@api/mydata.service';
import { FormErrorComponent } from '@shared/components/atoms/form-error/form-error.component';
import { FormFieldComponent } from '@shared/components/atoms/form-field/form-field.component';
import { FormLabelComponent } from '@shared/components/atoms/form-label/form-label.component';

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
    FormFieldComponent,
    FormErrorComponent,
    FormLabelComponent,
  ],
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  mydataService: MydataService = inject(MydataService);

  /** 都道府県最大文字数 */
  prefecturesMaxLength = 30;

  /** アイコン */
  myIconPath = '';

  /** ニックネーム */
  nicknameForm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  /** X(twitter) */
  twitterUserIdForm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.pattern(/^[A-Za-z0-9_]+$/)],
  });
  /** 誕生日 */
  birthdayForm = new FormControl<Date | null>(null, {
    nonNullable: false,
  });
  /** 都道府県 */
  prefecturesForm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.maxLength(this.prefecturesMaxLength)],
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
  });

  ngOnInit(): void {
    const resolverData = this.activatedRoute.snapshot.data;
    const mydata: MyData = resolverData['mydata'];
    this.myIconPath = mydata.iconImageId;
    this.nicknameForm.setValue(mydata.nickname);
    this.twitterUserIdForm.setValue(mydata.twitterUserId ?? '');
    this.birthdayForm.setValue(mydata.birthday);
    this.prefecturesForm.setValue(mydata.prefectures);
    this.techChipForm.setValue(mydata.techs);
    this.participationReasonForm.setValue(mydata.participationReason);
    this.hobbyForm.setValue(mydata.hobby);
    this.descriptionForm.setValue(mydata.description);
  }

  /** アイコン設定ボタンの押下 */
  onClickIconSettingButton(): void {
    this.mydataService.updateMyIcon('');
  }
}
