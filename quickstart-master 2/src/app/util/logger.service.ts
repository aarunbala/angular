import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  public log(msg:string){
    console.log(msg);
  }
}
