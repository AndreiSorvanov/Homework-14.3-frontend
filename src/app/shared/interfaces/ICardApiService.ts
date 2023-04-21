import { Observable } from 'rxjs';
import { ICard } from './ICard';
import { InjectionToken } from '@angular/core';

export const ICardsApiServiceToken = new InjectionToken(
  'ICardsApiServiceToken'
);

export interface ICardsApiService {
  getAll(): Observable<ICard[]>;
  add(card: Omit<ICard, 'id'>): Observable<void>;
  delete(id: string): Observable<void>;
}
