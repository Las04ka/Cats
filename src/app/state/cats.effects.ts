import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

import { loadCats, loadCatsFail, loadCatsSuccess } from './cats.actions';
import { Cat } from '../cats';
import { CatsService } from '../services/cats.service';
@Injectable()
export class CatsEffects{
  constructor(private actions$: Actions, private _catsService:CatsService) {
  }
  loadCats$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadCats),
        switchMap((action:ReturnType<typeof loadCats>) =>
          this._catsService.getCats(action.limit, action.breed).pipe(
            map((cats: Cat[]) =>
              loadCatsSuccess({cats})
            ),
            catchError(err => of(loadCatsFail({error: err})))
          )
        )
      )
    }
  )
}
