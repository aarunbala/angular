import{Transaction} from "../transactions/transaction.model";

export class Account{
  id:number;
  number:string;
  name:string;
  type:string;
  balance:number;
  transactions:Array<Transaction>;
  selected:boolean;

  constructor(id:number, number:string, name:string, type:string, balance:number, selected:boolean, transactions:Array<Transaction>){
    this.id=id;
    this.number=number;
    this.name=name;
    this.type=type;
    this.balance=balance;
    this.transactions=transactions;
    this.selected=selected;
  }
}
