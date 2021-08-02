import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


import { SlugifyPipe } from 'src/app/utils';

import { components } from './components';
import { modals } from './modals';

@NgModule({
  declarations: [...components, ...modals],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    ...components,
    ...modals
  ],
  providers: [
    SlugifyPipe,
  ]
})

export class SharedModule { }
