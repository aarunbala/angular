import { Component, ViewChild} from '@angular/core';
import {Account} from './accounts/account.model'
import {Transaction} from './transactions/transaction.model'
import {Transactions} from './transactions/transactions.component'
import {AccountForm} from './accounts/account-form.component'

@Component({
  selector: 'login-app',
  templateUrl: `app/login.component.html`,
  styleUrls: [`app/login.css`],
  providers: [Transactions, AccountForm]
})

export class LoginComponent {

  private _nextId = 5;
  private _transactions:Array<Transaction> = [
      new Transaction(1234, "Payment", new Date(Date.now()), 12.00),
      new Transaction(1235, "Payment", new Date(Date.now()), 9.00)
    ];
  private _accounts:Array<Account> = [
    new Account(1, "123456 123456789", "Sari", "Savings Account", 123.10, false, this._transactions),
    new Account(2, "065781 123456789", "Pari", "Savings Account", 453.20, false, this._transactions),
    new Account(3, "123450 123456789", "Yari", "Online Account", 123.10, false, this._transactions),
    new Account(4, "123459 123456789", "Wari", "Current Account", 123.10, false, this._transactions),
    new Account(5, "065783 123456789", "Tari", "Savings Account", 453.20, false, this._transactions)
  ];
  private select(index:number){
    this._accounts[index].selected=!this._accounts[index].selected;
  }

  private _removeTrx(index:number){
    this._transactions.splice(index, 1);
  }

  @ViewChild(AccountForm) form:AccountForm;

  private _createAcc(account: Account){
    account.id = this._nextId++;
    this._accounts.push(account);
    this.form.resetAccountForm();
  }


}
