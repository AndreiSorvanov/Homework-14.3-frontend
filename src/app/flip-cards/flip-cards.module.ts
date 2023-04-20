import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardsComponent } from './flip-cards.component';
import { CardAddFormModule } from './card-add-form/card-add-form.module';
import { CardsListModule } from './cards-list/cards-list.module';
import { CardModule } from './cards-list/card/card.module';

@NgModule({
  declarations: [FlipCardsComponent],
  exports: [FlipCardsComponent],
  imports: [CommonModule, CardAddFormModule, CardsListModule],
})
export class FlipCardsModule {}
