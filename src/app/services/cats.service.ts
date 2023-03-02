import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { Breed, Cat } from "../cats";
@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) {
  }

  getCats(limit = 10, breed_ids?:string): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://api.thecatapi.com/v1/images/search',
      {params: this.getCatsParams(limit,breed_ids)})
      .pipe(map((cats) =>
      cats.map((cat) => ({
        id: cat.id,
        url: cat.url,
      }))),)
  }

  getBreeds():Observable<Breed[]>{
    return this.http
      .get<Breed[]>('https://api.thecatapi.com/v1/breeds')
      .pipe(
        map((breeds) =>
          breeds.map((breed) =>
            ({ id: breed.id, name: breed.name })),
        )
      );
  }

  private getCatsParams(limit:number, breed_ids?:string):HttpParams{
    let httpParams:HttpParams=new HttpParams().append('limit',limit);
    if(breed_ids){
      httpParams=httpParams.append('breed_ids',breed_ids)
    }
    return httpParams
  }
}
