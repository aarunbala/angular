import {Injectable} from '@angular/core';
import {Account} from "./account.model"
import {Transaction} from "./../transactions/transaction.model"
import {TransactionService} from "./../transactions/transactions.service"
import {LoggerService} from './../util/logger.service'

@Injectable()

export class AccountService{
  private _transactionService:TransactionService;
  private _loggerService:LoggerService;
  private _transactions:Array<Transaction>;
  private _nextId = 5;
  private _accounts:Array<Account>;
  private _supportedAccountTypes:Array<string> = ['Savings', 'Online', 'Current'];

  constructor(transactionService: TransactionService, loggerService: LoggerService){
    this._transactionService = transactionService;

    this._transactions =  transactionService.getAll();
    // var promise = this._transactionService.getAll();
    // promise.then(transactions => this._transactions = transactions);

    this._initAccounts();
    this._loggerService = loggerService;
    // console.log("Bingo  "+this._accounts[0].transactions.length);
    // loggerService.log(this._transactions.length+ "  ");
  }

  private _initAccounts(){
  this._accounts = [
    new Account(1, "123456 123456789", "Sari", "Savings Account", 123.10, false, this._transactions),
    new Account(2, "065781 123456789", "Pari", "Savings Account", 453.20, false, this._transactions),
    new Account(3, "123450 123456789", "Yari", "Online Account", 123.10, false, this._transactions),
    new Account(4, "123459 123456789", "Wari", "Current Account", 123.10, false, this._transactions),
    new Account(5, "065783 123456789", "Tari", "Savings Account", 453.20, false, this._transactions)
  ];
}

  public getTransactionService():TransactionService{
    return this._transactionService;
  }

  public getAll():Promise<Array<Account>>{
    return Promise.resolve(this._accounts);
    // return this._accounts;
  }

  public getAllTransactions():Array<Transaction>{
    return this._transactions;
    // return this._transactionService.getAll();
  }

  public removeTransaction(index: number){
    this._transactions.splice(index, 1);
  }

  //Just to throw an error from the parent component, checking this random condition
  private _checkAccountType(account:Account):boolean{
    var result = false;
    for(let type of this._supportedAccountTypes){
        this._loggerService.log(type + "     "+account.type);
        if(account.type === type){
          result = true;
        }
    }
    return result;
  }

  public createAccount(account: Account){
    return new Promise((resolve, reject) => {
      if(this._checkAccountType(account) === false){
        this._loggerService.log("Unsupported Account Type");
        return reject("Unsupported Account type");
      } else{
        account.id = this._nextId++;
        this._loggerService.log("Account Created");
        this._accounts.push(account);
        resolve(account);
      }
    });
  }
}

export let ACCOUNT_SERVICE_PROVIDERS:Array<any> = [AccountService, LoggerService];
