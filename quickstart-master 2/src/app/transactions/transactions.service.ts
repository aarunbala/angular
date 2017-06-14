import {Injectable} from '@angular/core';
import {Transaction} from "./transaction.model";

@Injectable()

export class TransactionService {
  private _transactions:Array<Transaction> = [
      new Transaction(1234, "Payment", new Date(Date.now()), 12.00),
      new Transaction(1235, "Payment", new Date(Date.now()), 9.00)
    ];

  public getAll():Array<Transaction>{
    return this._transactions;
  }
}
