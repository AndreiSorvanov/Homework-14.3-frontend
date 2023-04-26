import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlippedCardsService {
  private _flippedCardsIds: Set<string> = new Set();
  private _localStorageKey: string = 'flippedCardsIds';

  get flippedCardsIds(): Set<string> {
    return this._flippedCardsIds;
  }

  initialize() {
    if (this._localStorageKey in localStorage) {
      this._flippedCardsIds = new Set(
        JSON.parse(localStorage.getItem(this._localStorageKey)!)
      );
    }
  }

  private _save() {
    localStorage.setItem(
      this._localStorageKey,
      JSON.stringify(Array.from(this._flippedCardsIds))
    );
  }

  flipCard(cardId: string) {
    if (this._flippedCardsIds.has(cardId)) {
      this._flippedCardsIds.delete(cardId);
    } else {
      this._flippedCardsIds.add(cardId);
    }

    this._save();
  }

  delete(cardId: string) {
    this._flippedCardsIds.delete(cardId);
    this._save();
  }

  clear() {
    this._flippedCardsIds = new Set();
    this._save();
  }
}
