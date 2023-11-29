import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigureThemeService {
  private cssSubject = new BehaviorSubject<string>('default-css-class');
  cssClass$ = this.cssSubject.asObservable();
  updateCssClass(newCssClass: string) {
    this.cssSubject.next(newCssClass);
  }
}