import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { Transactions } from './transactions/transactions.component';
import {AccountForm} from './accounts/account-form.component';
import {AccountService} from './accounts/account.service';
import {TransactionService} from './transactions/transactions.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LoginComponent, Transactions, AccountForm],
  bootstrap:    [ LoginComponent ]
})
export class AppModule { }
