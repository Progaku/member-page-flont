import {Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  router: Router = inject(Router);

  userIdForm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  onClickLogin(): void {
    this.router.navigate(['/internal/mypage']).then();
  }
}
