import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'accessCode';
  private readonly VALID_CODE = 'StefanoFsGiochi2025';

  isAuthenticated(): boolean {
    const storedCode = sessionStorage.getItem(this.STORAGE_KEY);
    return storedCode === this.VALID_CODE;
  }

  authenticate(code: string): boolean {
    if (code === this.VALID_CODE) {
      sessionStorage.setItem(this.STORAGE_KEY, code);
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem(this.STORAGE_KEY);
  }
}
