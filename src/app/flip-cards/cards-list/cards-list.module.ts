import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list.component';
import { CardModule } from './card/card.module';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [CardsListComponent],
  exports: [CardsListComponent],
  imports: [CommonModule, CardModule, TuiButtonModule],
})
export class CardsListModule {}
