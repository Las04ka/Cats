import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CatsModule } from "./cats";
import { catsReducer } from "./state/cats.reducer";
import { CatsEffects } from "./state/cats.effects";
import { AppRoutingModule } from './app-routing.module';
import { CatsInterceptor } from "./cats/cats.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    CatsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({cats:catsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([CatsEffects]),
    AppRoutingModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: CatsInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
