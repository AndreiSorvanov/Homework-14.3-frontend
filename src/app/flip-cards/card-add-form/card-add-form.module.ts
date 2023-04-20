import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAddFormComponent } from './card-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiTextAreaModule,
  TuiFieldErrorPipeModule,
} from '@taiga-ui/kit';

@NgModule({
  declarations: [CardAddFormComponent],
  exports: [CardAddFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule,
  ],
})
export class CardAddFormModule {}
