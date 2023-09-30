import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface LoginRequest {
  userId: string;
}

export interface LoinResponse {
  idToken: string;
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(param: LoginRequest): Observable<LoinResponse> {
    return of({
      idToken: 'idToken',
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    });
  }
}
