import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { CatsComponent } from './cats.component';
import { CatsService } from '../services/cats.service';
@NgModule({
  declarations: [CatsComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
  exports:[CatsComponent],
  providers:[CatsService]
})
export class CatsModule { }
