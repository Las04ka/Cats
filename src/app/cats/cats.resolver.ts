import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Breed } from './models';
import { CatsService } from '../services/cats.service';

@Injectable({
  providedIn: 'root'
})

export class CatsResolver implements Resolve<Breed[]> {
  constructor(private _catsService:CatsService){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<Breed[]> {
    return this._catsService.getBreeds()
  }
}
