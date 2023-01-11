import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesListRoutingModule } from './sales-list-routing.module';
import { SalesListComponent } from './sales-list.component';
import { AppMaterialModule } from 'src/app/core/app-material/app-material.module';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { BasePageComponent } from '../base-page/base-page.component';


@NgModule({
  declarations: [
    SalesListComponent,
    BasePageComponent
  ],
  imports: [
    CommonModule,
    SalesListRoutingModule,
    GridModule 
  ]
})
export class SalesListModule { }
