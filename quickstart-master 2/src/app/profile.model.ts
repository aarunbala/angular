export class Profile {
  id:number
  firstName:string
  lastName:string
  age:number
  dateOfBirth:Date
  height:number
  weight:number
  activity:string

  constructor (id:number, firstName:string, lastName:string, age:number,dateOfBirth:Date, height:number, weight:number, activity:string){
    this.id=id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.weight = weight;
    this.height = height;
    this.activity = activity;
  }
}
