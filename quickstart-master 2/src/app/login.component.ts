import { Component, ViewChild} from '@angular/core';
import {Account} from './accounts/account.model'
import {Transaction} from './transactions/transaction.model'
import {Transactions} from './transactions/transactions.component'
import {AccountForm} from './accounts/account-form.component'
import {AccountService} from './accounts/account.service'
import {TransactionService} from './transactions/transactions.service'

@Component({
  selector: 'login-app',
  templateUrl: `app/login.component.html`,
  styleUrls: [`app/login.css`],
  providers: [Transactions, AccountForm, AccountService, TransactionService]
})

export class LoginComponent {
  private _accountService: AccountService;
  private _transactionService: TransactionService;
  private _errorString = "";
  private _accounts: Array<Account>;
  private _transactions: Array<Transaction>;
  constructor(accountService:AccountService){
    this._accountService = accountService;
    this._accounts = accountService.getAll();
    this._transactions = accountService.getAllTransactions();
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
