import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Transaction} from './transaction.model';

@Component ({
  selector: "transactions",
  templateUrl: `app/transactions/transactions.component.html`,
  styleUrls: ['app/transactions/transactions.css']
})

export class Transactions {

  @Input('transactionsList') _transactions:Array<Transaction>;
    // private _transactions:Array<Transaction> = [
    //     new Transaction(1234, "Payment", new Date(Date.now()), 10),
    //     new Transaction(1235, "Payment", new Date(Date.now()), 9)
    //   ];

  @Output('delete') delete = new EventEmitter<number>();

  private _remove(index:number){
    this.delete.emit(index);
  }

}
