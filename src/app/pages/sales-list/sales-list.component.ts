import { Component, OnInit } from '@angular/core';
import {
  BankApiService,
  SalesListDetail,
  SalesListReq,
} from 'src/app/core/services/nswagService/bank-api-service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css'],
})
export class SalesListComponent extends BasePageComponent implements OnInit {
  constructor(private bankApiService: BankApiService) {
    super();
  }

  salesList: SalesListDetail[] | undefined = [];

  ngOnInit(): void {
    this.getSalesList();
  }

  getSalesList() {
    debugger;
    const req = new SalesListReq();
    this.subsSink.add(
      this.bankApiService.salesList(req).subscribe({
        next: (res) => {
          debugger;
          this.salesList = res.salesListDetail;
        },
      })
    );
  }
}
