export class Transaction{
  transactionId:number;
  type:string;
  time:Date;
  amount:number;

  constructor(transactionId:number, type:string, time:Date, amount:number){
    this.transactionId = transactionId;
    this.type = type;
    this.time = time;
    this.amount = amount;
  }
}
