import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'salesList',
    loadChildren: () =>
      import('./pages/sales-list/sales-list.module').then((m) => m.SalesListModule),
      title : "SalesList"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
