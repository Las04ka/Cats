import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { CatsService } from "../services/cats.service";
import { Breed, CatsResolverData } from "./models";
import { loadCats } from "../state/cats.actions";
import { catsSelector } from "../state/cats.reducer";
import { AppState } from "../state/state";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})

export class CatsComponent implements OnInit {
  cats$ = this.store.select(catsSelector)
  breeds!: Breed[];
  breedId?:string;
  quantity: number=10;
  constructor(private _CatService: CatsService,
              private store: Store<AppState>,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this._activatedRoute.data as CatsResolverData)
      .subscribe(el => this.breeds=el.breeds)
    this.store.dispatch(loadCats({limit: 10}))
  }

  onFilterChange(): void {
    this.store.dispatch(
      loadCats({limit: this.quantity, breed:this.breedId}))
  }
}
