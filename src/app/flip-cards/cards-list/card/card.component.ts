import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/ICard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input()
  card!: ICard;

  @Input()
  isFlipped: boolean = false;

  @Output()
  delete = new EventEmitter<ICard>();

  @HostBinding('class.unclickable') unclickable: boolean = false;

  onCloseBtnClick(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }

  onTransitionStart(event: Event) {
    this.unclickable = true;
  }

  onTransitionEnd(event: Event) {
    this.unclickable = false;
  }
}
