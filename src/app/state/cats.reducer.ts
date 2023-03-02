import { createReducer, createSelector, on } from '@ngrx/store';

import { loadCatsFail, loadCatsSuccess } from './cats.actions';
import { Breed, Cat } from '../cats';
import { AppState } from './state';

export interface CatsState {
  cats: Cat[]
  breeds: Breed[]
  error: string | null
}

const initialState: CatsState = {
  cats: [],
  breeds: [],
  error: null
}

export const catsReducer = createReducer(
  initialState,
  on(loadCatsSuccess, (state, {cats}) => ({
    ...state,
    cats: cats
  })),
  on(loadCatsFail, (state, {error}) => ({
    ...state,
    error: error
  }))
)

export const catsState = (state: AppState) => state.cats;
export const catsSelector = createSelector(catsState, (state) => state.cats)
