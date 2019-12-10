import { SnapState } from './snap.reducer';
import { createSelector } from '@ngrx/store';

const selectSnapState = (state: any) => state.snap;

const selectPlayerPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.player.cards
);

const selectComputerPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.computer.cards
);

const selectCenterPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.centerPile.cards
);

const selectPlaying = createSelector(
  selectSnapState,
  (state: SnapState) => state.isPlaying
);

export const fromSnap = {
  selectPlayerPile,
  selectComputerPile,
  selectCenterPile,
  selectPlaying
};