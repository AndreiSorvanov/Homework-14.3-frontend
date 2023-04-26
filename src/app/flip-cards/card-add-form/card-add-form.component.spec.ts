import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddFormComponent } from './card-add-form.component';

describe('CardAddFormComponent', () => {
  let component: CardAddFormComponent;
  let fixture: ComponentFixture<CardAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardAddFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
