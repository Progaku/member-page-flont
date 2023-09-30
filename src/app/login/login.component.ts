import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { FormErrorComponent } from '@shared/components/atoms/form-error/form-error.component';
import { FormFieldComponent } from '@shared/components/atoms/form-field/form-field.component';
import { FormLabelComponent } from '@shared/components/atoms/form-label/form-label.component';
import { ToastService } from '@shared/services/toast.service';
import { AuthService } from '@api/auth.service';
import { StorageService } from '@shared/services/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    FormFieldComponent,
    FormErrorComponent,
    FormLabelComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  subscription = new Subscription();
  router: Router = inject(Router);
  toastService: ToastService = inject(ToastService);
  storageService: StorageService = inject(StorageService);
  authService: AuthService = inject(AuthService);

  userIdForm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  formGroup = new FormGroup({
    userId: this.userIdForm
  })

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickLogin(): void {
    this.subscription.add(
      this.authService.login(this.formGroup.getRawValue())
        .subscribe((loginResponse) => {
          this.storageService.setAuthParams(loginResponse);
          this.toastService.info('login');
          this.router.navigate(['/internal/mypage']).then();
        })
    );
  }
}
