import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { ICard } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-card-add-form',
  templateUrl: './card-add-form.component.html',
  styleUrls: ['./card-add-form.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'поле обязательно для заполнения',
      },
    },
  ],
})
export class CardAddFormComponent {
  @Output()
  add = new EventEmitter<ICard>();

  isEdit = false;

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  submit() {
    const data: ICard = {
      title: this.form.get('title')?.value!,
      description: this.form.get('description')?.value!,
    };

    this.add.emit(data);

    this.form.reset();
  }
}
