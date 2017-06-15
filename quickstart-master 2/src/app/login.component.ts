import { Component, ViewChild, Optional} from '@angular/core';
import {Account} from './accounts/account.model'
import {Transaction} from './transactions/transaction.model'
import {Transactions} from './transactions/transactions.component'
import {AccountForm} from './accounts/account-form.component'
import {AccountService, ACCOUNT_SERVICE_PROVIDERS} from './accounts/account.service'
import {TransactionService} from './transactions/transactions.service'
import {LoggerService} from './util/logger.service'

@Component({
  selector: 'login-app',
  templateUrl: `app/login.component.html`,
  styleUrls: [`app/login.css`],
  providers: [Transactions, AccountForm, ACCOUNT_SERVICE_PROVIDERS, TransactionService]
})

export class LoginComponent {
  private _accountService: AccountService;
  private _transactionService: TransactionService;
  private _errorString = "";
  private _accounts: Array<Account>;
  private _transactions: Array<Transaction>;
  constructor(accountService:AccountService, @Optional() private loggerService:LoggerService){
    this._accountService = accountService;
    this._accounts = accountService.getAll();
    this._transactions = accountService.getAllTransactions();
    loggerService.log("Transaction Count  : "+this._transactions.length);
  }

  private select(index:number){
    this._accounts[index].selected=!this._accounts[index].selected;
  }

  private _removeTrx(index:number){
    this._transactions.splice(index, 1);
  }

  @ViewChild(AccountForm) form:AccountForm;

  private _createAcc(account: Account){
    this._accountService.createAccount(account);
    this.form.resetAccountForm();
  }
}
