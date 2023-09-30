import { Injectable } from '@angular/core';
import { LoinResponse } from '@api/auth.service';

enum StorageKey {
  IdToken = 'IdToken',
  RefreshToken = 'RefreshToken',
}

class StorageRepository {
  constructor(private storage = localStorage) {}

  getItem(key: StorageKey) {
    return this.storage.getItem(key);
  }

  setItem(key: StorageKey, value: string): void {
    this.storage.setItem(key, value);
  }

  removeItem(key: StorageKey): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage = new StorageRepository();

  get idToken(): string | null {
    return this.storage.getItem(StorageKey.IdToken);
  }

  get refreshToken(): string | null {
    return this.storage.getItem(StorageKey.RefreshToken);
  }

  setAuthParams(param: LoinResponse): void {
    this.storage.setItem(StorageKey.IdToken, param.idToken);
    this.storage.setItem(StorageKey.RefreshToken, param.refreshToken);
  }

  clear(): void {
    this.storage.clear();
  }
}
