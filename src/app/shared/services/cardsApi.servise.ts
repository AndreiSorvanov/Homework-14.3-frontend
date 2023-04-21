import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICardsApiService } from '../interfaces/ICardApiService';
import { ICard } from '../interfaces/ICard';

const host = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class CardsApiService implements ICardsApiService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ICard[]> {
    return this.httpClient.get<ICard[]>(host);
  }

  add(card: ICard): Observable<void> {
    return this.httpClient.post<void>(host, card);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }
}
