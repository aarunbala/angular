import { Component } from '@angular/core';
import {Profile} from './profile.model';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  styleUrls: [`app/profile-styles.css`]
})
export class AppComponent  {
  name:string = 'Angular';
  isBlueBg:boolean = true
  hideFlag:boolean = false
  disableFlag:boolean = true
  personA : person = { id:2, name:"Hari", designation:"Manager" }
  persons : Array<person> = [
    {id:1, name: "Arun", designation:"Consultant"},
    {id:2, name: "Hari", designation:"Manager"},
    {id:3, name: "bingo", designation:"Director"}
  ]
  private _customerProfiles : Array<Profile> = [
    new Profile(1, "Hari", "Doraiswamy", 35, new Date("12/09/1983"), 165, 99, "Less Active"),
    new Profile(2, "Hari", "Doraiswamy", 35, new Date("12/09/1983"), 165, 99, "Less Active")
  ]
  profileIndex: number = this._customerProfiles.length;
  private getName():string {return this.personA.name;}
  private getDesignation():string {return this.personA.designation;}
  private isHidden():boolean { return this.hideFlag;}
  private isDisabled():boolean { return this.disableFlag;}
  private isBlueBG():boolean { return this.isBlueBg;}
  private toggleHideFlag() {this.hideFlag = !this.hideFlag;}
  private enableInput() {this.disableFlag = false;}
  private changeName (name:string) { this.name = name;}
  private addPerson(name:string, designation:string){
    var length = this.persons.length;
    var person: person = {id:length+1, name:name, designation:designation};
    this.persons.push(person);
  }

  private resetValues(elements:Array<HTMLInputElement>){
    var element : any;
    for(element in elements){
      element.value="";
    }
  }

  private addProfile(firstName:any, lastName:any, dateOfBirth:any, age:any, height:any, weight:any,activity:any){
    var customerProfile = new Profile(++this.profileIndex,firstName.value, lastName.value, age.value,dateOfBirth.value, height.value, weight.value,activity.value);
    this._customerProfiles.push(customerProfile);
    var elementArray:Array<HTMLInputElement> = [];
    this.resetValues(elementArray);
    //this.resetValues(new Array<HTMLInputElement>(firstName,lastName,age,dateOfBirth,height,weight,activity));
  }

  private removeProfile(profile:Profile){
    var index:number = this._customerProfiles.findIndex(x => x.id==profile.id);
    this._customerProfiles.splice(index,1);
  }

  private changeImage(delImage:HTMLImageElement, src:string){
      delImage.src = src;
  }

  private calculateAge(dateElement: HTMLInputElement, ageElement:HTMLInputElement){
    var date = new Date(dateElement.value);
    var currentDate = new Date();
    var ageStr:string;
    var age:number = Math.floor(Math.abs(currentDate.getTime() - date.getTime())/(1000*3600*24*365));
    if(age>=1){
      ageStr = age + " Years";
    }else if(age<1){
      age = Math.floor(Math.abs(currentDate.getTime() - date.getTime())/(1000*3600*24*30));
      ageStr = age + " Months";
    }
    console.log(age);
    ageElement.value = ageStr;
  }


  //written for Key press Enter - can be done with keyup.enter in template.
  private keyPress (event:KeyboardEvent){
    if(event.keyCode == 13){
      var inputElement = <HTMLInputElement> event.target;
      if(inputElement.name == "name"){
        this.name = inputElement.value;
      }
    }
  }
}

interface person{
  id:number,
  name: string,
  designation: string
}
