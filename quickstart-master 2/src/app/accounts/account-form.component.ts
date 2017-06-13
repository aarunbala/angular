import {Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: "account-form",
  templateUrl: 'app/accounts/account-form.component.html',
  styleUrls: ['app/accounts/account-form.component.css']
})

export class AccountForm{

  @Output() account = new EventEmitter<Account>();

  private _createAcc(bsb:any, account:any, name:any, type:any, balance:any){
    var newAccount:Account = new Account(0, bsb.value +"  "+account.value, name.value, type.value, balance.value, false, null);
    this.account.emit(newAccount);
  }

  @ViewChild('accountForm') accountForm:ElementRef;

  public resetAccountForm(){
    this.accountForm.nativeElement.reset();
  }

}
