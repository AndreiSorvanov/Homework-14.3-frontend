import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less'],
})
export class CardsListComponent {
  @Input()
  cards!: ICard[];

  @Output()
  delete = new EventEmitter<number>();

  flippedCardIndex = -1;

  onClick(index: number) {
    this.flippedCardIndex = this.flippedCardIndex === index ? -1 : index;
  }

  onDelete(index: number) {
    if (index < this.flippedCardIndex) {
      this.flippedCardIndex--;
    } else if (index === this.flippedCardIndex) {
      this.flippedCardIndex = -1;
    }
    this.delete.emit(index);
  }
}
