import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {CatsResolver, CatsComponent} from "./cats";


const routes: Routes = [
  {path: '', component: CatsComponent, resolve: {breeds: CatsResolver}}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
