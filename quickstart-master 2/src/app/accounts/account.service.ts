import {Injectable} from '@angular/core';
import {Account} from "./account.model"
import {Transaction} from "./../transactions/transaction.model"
import {TransactionService} from "./../transactions/transactions.service"

@Injectable()

export class AccountService{
  private _transactionService:TransactionService;
  private _transactions:Array<Transaction>;
  private _nextId = 5;
  private _supportedAccountTypes:Array<string> = ['Savings', 'Online', 'Current'];

  constructor(transactionService: TransactionService){
    this._transactionService = transactionService;
    this._transactions =  transactionService.getAll();
  }
  private _accounts:Array<Account> = [
    new Account(1, "123456 123456789", "Sari", "Savings Account", 123.10, false, this._transactions),
    new Account(2, "065781 123456789", "Pari", "Savings Account", 453.20, false, this._transactions),
    new Account(3, "123450 123456789", "Yari", "Online Account", 123.10, false, this._transactions),
    new Account(4, "123459 123456789", "Wari", "Current Account", 123.10, false, this._transactions),
    new Account(5, "065783 123456789", "Tari", "Savings Account", 453.20, false, this._transactions)
  ];

  public getTransactionService():TransactionService{
    return this._transactionService;
  }

  public getAll():Array<Account>{
    return this._accounts;
  }

  public getAllTransactions():Array<Transaction>{
    return this._transactionService.getAll();
  }

  //Just to throw an error from the parent component, checking this random condition
  private _checkAccountType(account:Account):boolean{
    var result = false;
    for(let type of this._supportedAccountTypes){
        console.log(type + "     "+account.type);
        if(account.type === type){
          result = true;
        }
    }
    return result;
  }

  public createAccount(account: Account){
    account.id = this._nextId++;
    this._accounts.push(account);
  }
}
