import { Observable } from "rxjs";

export interface Cat {
  id: string,
  url: string
}

export interface Breed {
  id:string,
  name:string
}

export type CatsResolverData=Observable<{breeds:Breed[]}>
