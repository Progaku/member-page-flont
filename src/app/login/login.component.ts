import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormFieldComponent } from '@shared/atoms/form-field/form-field.component';
import { FormErrorComponent } from '@shared/atoms/form-error/form-error.component';
import { FormLabelComponent } from '@shared/atoms/form-label/form-label.component';
import { ToastService } from '@shared/services/toast.service';

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
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  router: Router = inject(Router);
  toastService: ToastService = inject(ToastService);

  userIdForm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  onClickLogin(): void {
    this.toastService.info('login');
    this.router.navigate(['/internal/mypage']).then();
  }
}
