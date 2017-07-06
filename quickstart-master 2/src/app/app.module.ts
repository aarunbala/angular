import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent }  from './app.component';
import { AdminComponent }  from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { Transactions } from './transactions/transactions.component';
import { AccountForm } from './accounts/account-form.component';
import { AccountService } from './accounts/account.service';
import { TransactionService } from './transactions/transactions.service';

const routes:Routes = [
  {path: "", component: HomeComponent},
  {path: "app", component:AdminComponent}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, AdminComponent, HomeComponent, Transactions, AccountForm],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
     console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
   }
 }
