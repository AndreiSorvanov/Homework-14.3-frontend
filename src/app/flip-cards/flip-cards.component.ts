import { Component, OnInit } from '@angular/core';
import { ICard } from '../shared/interfaces/ICard';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.less'],
})
export class FlipCardsComponent implements OnInit {
  cards: ICard[] = [];

  constructor(public cardsService: CardsService) {}

  ngOnInit() {
    this.cardsService.initialize();
  }

  addCard(card: Omit<ICard, 'id'>) {
    this.cardsService.addCard(card);
  }

  deleteCard(id: string) {
    this.cardsService.deleteCard(id);
  }
}
