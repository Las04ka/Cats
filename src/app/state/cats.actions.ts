import { createAction, props } from '@ngrx/store';

import { Cat } from '../cats';

export const loadCats = createAction(
  '[Cats] Load Cats',
  props<{limit:number;breed?:string}>()
)

export const loadCatsSuccess = createAction(
  '[Cats] Load Cats Success',
  props<{ cats: Cat[]}>(),
);

export const loadCatsFail = createAction(
  '[Cats] Load Cats Fail',
  props<{ error: string }>(),
);
