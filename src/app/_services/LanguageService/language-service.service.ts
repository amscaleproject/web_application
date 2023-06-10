import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject: BehaviorSubject<string>;
  public currentLanguage: Observable<string>;

  constructor() {
    this.currentLanguageSubject = new BehaviorSubject<string>('en');
    this.currentLanguage = this.currentLanguageSubject.asObservable();
  }

  public setCurrentLanguage(lang: string) {
    this.currentLanguageSubject.next(lang);
  }

  public getCurrentLanguage(): Observable<string> {
    return this.currentLanguage;
  }
}
