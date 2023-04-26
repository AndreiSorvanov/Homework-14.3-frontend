import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/ICard';
import { FlippedCardsService } from 'src/app/shared/services/flippedCards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less'],
})
export class CardsListComponent implements OnInit {
  @Input()
  cards!: ICard[];

  @Output()
  delete = new EventEmitter<string>();

  constructor(public flippedCardsService: FlippedCardsService) {}

  ngOnInit() {
    this.flippedCardsService.initialize();
  }

  onBtnClick() {
    this.flippedCardsService.clear();
  }

  onClick(id: string) {
    this.flippedCardsService.flipCard(id);
  }

  onDelete(id: string) {
    this.flippedCardsService.delete(id);
    this.delete.emit(id);
  }
}
