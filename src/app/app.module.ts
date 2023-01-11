import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './core/app-material/app-material.module';
import { BankApiService, BANK_API_BASE_URL } from './core/services/nswagService/bank-api-service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: BANK_API_BASE_URL, useValue: environment.bankApiUrl },
    BankApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
