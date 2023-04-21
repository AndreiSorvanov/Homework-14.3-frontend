import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardsComponent } from './flip-cards.component';
import { CardAddFormModule } from './card-add-form/card-add-form.module';
import { CardsListModule } from './cards-list/cards-list.module';
import { ICardsApiServiceToken } from '../shared/interfaces/ICardApiService';
import { CardsApiService } from '../shared/services/cardsApi.servise';

@NgModule({
  declarations: [FlipCardsComponent],
  exports: [FlipCardsComponent],
  imports: [CommonModule, CardAddFormModule, CardsListModule],
  providers: [{ provide: ICardsApiServiceToken, useClass: CardsApiService }],
})
export class FlipCardsModule {}
