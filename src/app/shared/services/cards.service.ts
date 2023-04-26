import { ICard } from '../interfaces/ICard';
import { Inject, Injectable } from '@angular/core';
import {
  ICardsApiService,
  ICardsApiServiceToken,
} from '../interfaces/ICardApiService';

@Injectable({ providedIn: 'root' })
export class CardsService {
  private _cards: ICard[] = [];

  constructor(
    @Inject(ICardsApiServiceToken)
    public cardsService: ICardsApiService
  ) {}

  get cards(): ICard[] {
    return this._cards;
  }

  initialize() {
    this.cardsService.getAll().subscribe((cards: ICard[]) => {
      this._cards = cards;
    });
  }

  addCard(card: Omit<ICard, 'id'>) {
    this.cardsService.add(card).subscribe(() => {
      this.initialize();
    });
  }

  deleteCard(id: string) {
    this.cardsService.delete(id).subscribe(() => {
      this.initialize();
    });
  }
}
